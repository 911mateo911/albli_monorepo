export interface Dropdown {
  key: string;
  children: JSX.Element | null;
  initial?: boolean;
  renderWhenKey: string;
}

export interface MultiLevelDropdownProps {
  dropdowns: Dropdown[];
  wrapperClassName?: string;
  triggerOn: 'hover' | 'click';
}
