import {Injectable, InjectionToken} from "@angular/core";
import {NavigationItemModel} from "../model/NavigationItemModel";

/**
 * NavigationUtilityService
 * By providing a custom implementation, you can override various layouts components behaviour to mark an item active or not.
 * This is useful when you want to make it based on a browser router location.
 */
export interface NavigationUtilityService {
    isItemActive(item:NavigationItemModel):boolean
}
export const NAVIGATION_UTIL_SERVICE = new InjectionToken<NavigationUtilityService>('NAVIGATION_UTIL_SERVICE');

@Injectable()
export class DefaultNavigationUtilityServiceImpl implements NavigationUtilityService {

    /**
     * You may overrule this method to determine for example based on current URL / page context whether the item is active.
     * @param item
     */
    isItemActive(item: NavigationItemModel): boolean {
        return item.active;
    }

}