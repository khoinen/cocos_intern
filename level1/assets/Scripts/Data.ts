import FBInstantManager from './FBInstantManager';

const {ccclass, property} = cc._decorator;

const playerId = FBInstantManager.getInstance().getPlayerId()

export const LOCAL_KEY = "userData";
export const FACEBOOK_KEY = "facebookData";


@ccclass
export default class Data {
    public static LOCAL_KEY = LOCAL_KEY;
    public static FACEBOOK_KEY = FACEBOOK_KEY;
    public static FACEBOOK_LOCAL_KEY = "facebookLocalUserData";

    public static defaultData = {
        money: 0,
        unlockedLevel: 18,
        isSound: true,
        isMusic: true,
        isVibrate: true,
    }

    public static isLocal() {
        return playerId === 'localId'
    }

    public static saveData(data: JSON, key: string = LOCAL_KEY, cb: Function = null): void {
        if (key === LOCAL_KEY) {
            cc.sys.localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
            cb && cb(null)
        }

        if (Data.isLocal() && key !== LOCAL_KEY) {
            Data.saveData(data, Data.LOCAL_KEY)
            return cb && cb(null)
        }

        if (key === FACEBOOK_KEY) {
            FBInstantManager.getInstance().setPlayerData(data, (err) => {
                err && console.log('save facebook err:', err)
                cc.sys.localStorage.setItem(Data.FACEBOOK_LOCAL_KEY, JSON.stringify(data))
                cb && cb(err)
            })
        }
    }

    public static getData(key: string = LOCAL_KEY, cb: Function = (...params) => {}) {
        if (key === LOCAL_KEY) return Data.getLocalData(cb)
        if (Data.isLocal() && key !== Data.LOCAL_KEY) return Data.getLocalData(cb)
        if (key === FACEBOOK_KEY) return Data.getFacebookData(cb)
    }

    public static getLocalData(cb) {
        let _data = cc.sys.localStorage.getItem(LOCAL_KEY);
        if (_data)
        {
            cb(null, JSON.parse(_data));
        }
        else
        {
            var data = { ...Data.defaultData }
            cb(null, data);
        }
    }

    public static getFacebookData(cb) {
        FBInstantManager.getInstance().getPlayerData((err, data) => {
            if (err) {
                console.log('get facebook data err', err)
                const data = cc.sys.localStorage.getItem(Data.FACEBOOK_LOCAL_KEY)

                if (data) {
                    return cb(null, JSON.parse(data))
                }

                return cb(null, { ...Data.defaultData })
            }

            if (!data) {
                return Data.getData(Data.LOCAL_KEY, (err, localData) => {
                    cb(
                        null,
                        {
                            ...Data.defaultData,
                            ...localData,
                        }
                    )
                })
            }

            cb(
                null,
                {
                    ...Data.defaultData,
                    ...data,
                }
            )
        })
    }

    public removeData(): void {
        cc.sys.localStorage.removeItem(LOCAL_KEY);
    }
}
