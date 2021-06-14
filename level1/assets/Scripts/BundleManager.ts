import Data from "./Data";

const {ccclass, property} = cc._decorator;
@ccclass
export default class BundleManager extends cc.Component {

    private static _instance = null;
    private _bundle = [];
    private _prefabs = [];

    private _lazyLoadBundle = [];

    public static getInstance(): BundleManager {
        if (BundleManager._instance)
            return BundleManager._instance;
        else {
            BundleManager._instance = new BundleManager();
            return BundleManager._instance;
        }
    }

    // New  
    getPrefabByName(name: string, cb: any = null): void {
        for (let _prefab of this._prefabs)
        {
            if (_prefab.name == name) {
                cb && cb(null, _prefab);
                return;
            }
        }

        cc.assetManager.loadBundle(name, (err, bundle) => {
            if (!err) {
            bundle.load(name, cc.Prefab, (err, prefab) => {
                    if (!err) {
                        console.error("Loaded " + prefab.name)
                        if (!this._prefabs.includes(prefab)) {
                            this._prefabs.push(prefab);
                        }
                        cb && cb(null, prefab);
                        return;
                    }

                    console.log(err)
                });
                return;
            }
            if (cb) {
                console.error(err);
                
                cb(err, null);
            }
            else {
                console.error(err);
            }
        })
    }
}
