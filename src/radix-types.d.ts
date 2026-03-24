import * as React from "react";

// Augment Radix UI primitive types to support className and children
// This is needed for Radix UI v1.2+ which removed className from types
declare module "@radix-ui/react-accordion" {
  interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface AccordionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}
}

declare module "@radix-ui/react-alert-dialog" {
  interface AlertDialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface AlertDialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
  interface AlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
  interface AlertDialogActionProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface AlertDialogCancelProps extends React.HTMLAttributes<HTMLButtonElement> {}
}

declare module "@radix-ui/react-avatar" {
  interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
  interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-checkbox" {
  interface CheckboxProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface CheckboxIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-collapsible" {
  interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-context-menu" {
  interface ContextMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuSubContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ContextMenuItemIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface ContextMenuRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-dialog" {
  interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
  interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
}

declare module "@radix-ui/react-dropdown-menu" {
  interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuSubContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface DropdownMenuItemIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface DropdownMenuRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-hover-card" {
  interface HoverCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-label" {
  interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
}

declare module "@radix-ui/react-menubar" {
  interface MenubarMenuProps {}
  interface MenubarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface MenubarContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarCheckboxItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarRadioItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarSubContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarSubTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface MenubarItemIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-navigation-menu" {
  interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {}
  interface NavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}
  interface NavigationMenuTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
  interface NavigationMenuViewportProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface NavigationMenuIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-popover" {
  interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-progress" {
  interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ProgressIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-radio-group" {
  interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface RadioGroupItemProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface RadioGroupIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-scroll-area" {
  interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ScrollAreaViewportProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ScrollAreaScrollbarProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ScrollAreaThumbProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-select" {
  interface SelectTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectScrollUpButtonProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectScrollDownButtonProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectViewportProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface SelectItemTextProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface SelectItemIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-separator" {
  interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-slider" {
  interface SliderProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface SliderTrackProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface SliderRangeProps extends React.HTMLAttributes<HTMLSpanElement> {}
  interface SliderThumbProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-switch" {
  interface SwitchProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface SwitchThumbProps extends React.HTMLAttributes<HTMLSpanElement> {}
}

declare module "@radix-ui/react-tabs" {
  interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface TabsTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {}
}

declare module "@radix-ui/react-toast" {
  interface ToastProps extends React.HTMLAttributes<HTMLLIElement> {}
  interface ToastActionProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface ToastCloseProps extends React.HTMLAttributes<HTMLButtonElement> {}
  interface ToastTitleProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ToastDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ToastViewportProps extends React.HTMLAttributes<HTMLOListElement> {}
}

declare module "@radix-ui/react-toggle" {
  interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement> {}
}

declare module "@radix-ui/react-toggle-group" {
  interface ToggleGroupSingleProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ToggleGroupMultipleProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface ToggleGroupItemProps extends React.HTMLAttributes<HTMLButtonElement> {}
}

declare module "@radix-ui/react-tooltip" {
  interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {}
  interface TooltipTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {}
}
