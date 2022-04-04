export interface TabType {
  isActive: boolean;
  tabName: string;
}

export interface TabsProps {
  tabs: TabType[];
  onTabChange: (tab: string) => void;
  wrapperClassName?: string;
}
