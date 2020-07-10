import {RoutedCoreComponentModel} from "./RoutedCoreComponentModel";

export interface NavigationItemModel extends RoutedCoreComponentModel{
    active: boolean
    url: string
    path: string
}