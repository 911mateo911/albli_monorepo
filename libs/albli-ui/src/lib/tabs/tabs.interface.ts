export interface TabType<T> {
  isActive: boolean;
  tabName: T;
}

export interface TabsProps<T extends string> {
  tabs: TabType<T>[];
  onTabChange: (tab: T) => void;
  wrapperClassName?: string;
}
