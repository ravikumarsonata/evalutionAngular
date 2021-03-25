import { Input, Directive, TemplateRef, ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import Trigger from '../models/trigger';
import Placement from '../models/placement';
import { PopoverPopupComponent } from '../components/popover-popup/popover-popup.component';
@Directive({ selector: '[Popover]' })
export class PopoverDirective {
    constructor(
        private resolver: ComponentFactoryResolver,
        private cdr: ChangeDetectorRef,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }

    componentRef: ComponentRef<any>;

    private active: string;
    public get Popover(): string {
        return this.active;
    }
    @Input() 
    public set Popover(value: string) {
        this.active = value;
        this.show();
    }

    private title: string;
    public get Title(): string {
        return this.title;
    }
    @Input()
    public set Title(value: string) {
        this.title = value;
    }

    private content: string;
    public get Content(): string {
        return this.content;
    }
    @Input()
    public set Content(value: string) {
        this.content = value;
    }

    private placement = Placement.Right;
    public get Placement() {
        return this.placement;
    }
    @Input()
    public set Placement(value) {
        this.placement = value;
    }

    private trigger = Trigger.Click;
    public get Trigger() {
        return this.trigger;
    }
    @Input()
    public set Trigger(value) {
        this.trigger = value;
    }

    private popoverPopupComponent: PopoverPopupComponent

    private show() {
        const factory = this.resolver.resolveComponentFactory(PopoverPopupComponent);
        this.componentRef = this.viewContainer.createComponent(factory);
    }

    private hide() {
        this.componentRef.destroy();
    }

    ngOnDestroy() {
        this.hide();
    }
}
