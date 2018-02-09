webpackJsonp([4],{169:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),r=n(0),o=n(7),a=n(10),l=n(89),c=n(92),d=n(261),u=n(263),m=n(265),f=n(267),p=n(182),v=n(3),b=n(93),h=n(184),g=[{path:"",component:f.UserManagementComponent,canActivate:[b.AuthGuard]},{path:"add",component:u.UserManagementAddComponent,canActivate:[b.AuthGuard]},{path:"edit/:id",component:m.UserManagementEditComponent,canActivate:[b.AuthGuard]},{path:"updatedetails",component:d.UpdateDetailsComponent,canActivate:[b.AuthGuard]}],y=function(){function e(){}return e=i([r.NgModule({imports:[s.CommonModule,o.FormsModule,o.ReactiveFormsModule,a.RouterModule.forChild(g),c.NgbModule.forRoot(),l.MultiSelectModule,p.PipeModule,l.ConfirmDialogModule,l.TooltipModule,h.OrderModule,l.SidebarModule],declarations:[f.UserManagementComponent,u.UserManagementAddComponent,m.UserManagementEditComponent,d.UpdateDetailsComponent],exports:[a.RouterModule],providers:[v.IdentityService,l.ConfirmationService]})],e)}();t.UserManagementModule=y},172:function(e,t,n){"use strict";function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(173)),i(n(174)),i(n(175)),i(n(176))},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Email=0]="Email",e[e.Discord=1]="Discord",e[e.Pushbullet=2]="Pushbullet",e[e.Pushover=3]="Pushover",e[e.Telegram=4]="Telegram"}(t.NotificationAgent||(t.NotificationAgent={})),function(e){e[e.NewRequest=0]="NewRequest",e[e.Issue=1]="Issue",e[e.RequestAvailable=2]="RequestAvailable",e[e.RequestApproved=3]="RequestApproved",e[e.AdminNote=4]="AdminNote",e[e.Test=5]="Test",e[e.RequestDeclined=6]="RequestDeclined",e[e.ItemAddedToFaultQueue=7]="ItemAddedToFaultQueue",e[e.WelcomeEmail=8]="WelcomeEmail",e[e.IssueResolved=9]="IssueResolved"}(t.NotificationType||(t.NotificationType={}))},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.movie=1]="movie",e[e.tvShow=2]="tvShow"}(t.RequestType||(t.RequestType={})),function(e){e[e.None=0]="None",e[e.Available=1]="Available",e[e.NotAvailable=2]="NotAvailable",e[e.Approved=3]="Approved",e[e.Processing=4]="Processing",e[e.PendingApproval=5]="PendingApproval"}(t.FilterType||(t.FilterType={}))},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.LocalUser=1]="LocalUser",e[e.PlexUser=2]="PlexUser",e[e.EmbyUser=3]="EmbyUser"}(t.UserType||(t.UserType={}))},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Pending=0]="Pending",e[e.InProgress=1]="InProgress",e[e.Resolved=2]="Resolved"}(t.IssueStatus||(t.IssueStatus={}))},182:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=n(183),o=function(){function e(){}return t=e,e.forRoot=function(){return{ngModule:t,providers:[]}},e=t=i([s.NgModule({imports:[],declarations:[r.HumanizePipe],exports:[r.HumanizePipe]})],e);var t}();t.PipeModule=o},183:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=function(){function e(){}return e.prototype.transform=function(e){return"string"!=typeof e?e:e=(e=e.split(/(?=[A-Z])/).join(" "))[0].toUpperCase()+e.slice(1)},e=i([s.Pipe({name:"humanize"})],e)}();t.HumanizePipe=r},184:function(e,t,n){e.exports=n(1)(978)},261:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(7),a=n(3),l=n(3),c=function(){function e(e,t,n){this.identityService=e,this.notificationService=t,this.fb=n}return e.prototype.ngOnInit=function(){var e=this;this.identityService.getUser().subscribe(function(t){var n=t;e.form=e.fb.group({id:[n.id],username:[n.userName],emailAddress:[n.emailAddress,[o.Validators.email]],confirmNewPassword:[n.confirmNewPassword],currentPassword:[n.currentPassword,[o.Validators.required]],password:[n.password]})})},e.prototype.onSubmit=function(e){var t=this;e.invalid?this.notificationService.error("Please check your entered values"):e.controls.password.dirty&&e.value.password!==e.value.confirmNewPassword?this.notificationService.error("Passwords do not match"):this.identityService.updateLocalUser(this.form.value).subscribe(function(e){e.successful?t.notificationService.success("All of your details have now been updated"):e.errors.forEach(function(e){t.notificationService.error(e)})})},e=i([r.Component({template:n(262)}),s("design:paramtypes",[a.IdentityService,l.NotificationService,o.FormBuilder])],e)}();t.UpdateDetailsComponent=c},262:function(e,t){e.exports='<div *ngIf="form">\n\n    <h3>Hello {{form.value.username}}!</h3>\n    <div class="col-md-6">\n        <form novalidate [formGroup]="form" (ngSubmit)="onSubmit(form)">\n            <div class="modal-body" style="margin-top:45px;">\n                <div class="form-group">\n                    <label for="emailAddress" class="control-label">Email Address</label>\n                    <div>\n                        <input type="text" formControlName="emailAddress" class="form-control form-control-custom " id="emailAddress" name="emailAddress">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="currentPassword" class="control-label">Current Password</label>\n                    <div>\n                        <input type="password" formControlName="currentPassword" class="form-control form-control-custom " id="currentPassword" name="currentPassword">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="password" class="control-label">New Password</label>\n                    <div>\n                        <input type="password" formControlName="password" class="form-control form-control-custom " id="password" name="password">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="confirmPassword" class="control-label">Confirm New Password</label>\n                    <div>\n                        <input type="password" formControlName="confirmNewPassword" class="form-control form-control-custom " id="confirmPassword"\n                            name="confirmPassword">\n                    </div>\n                </div>\n            </div>\n            <div>\n                <button type="submit" class="btn btn-primary-outline" [disabled]="form.invalid">Save</button>\n\n            </div>\n        </form>\n    </div>\n    <div class="col-md-6">\n        <div *ngIf="form.invalid && form.dirty" class="alert alert-danger">\n            <div *ngIf="form.get(\'emailAddress\').hasError(\'email\')">Email address format is incorrect</div>\n            <div *ngIf="form.get(\'password\').hasError(\'required\')">The Password is required</div>\n            <div *ngIf="form.get(\'confirmNewPassword\').hasError(\'required\')">The Confirm New Password is required</div>\n            <div *ngIf="form.get(\'currentPassword\').hasError(\'required\')">Your current password is required</div>\n        </div>\n    </div>\n</div>\n'},263:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(10),a=n(172),l=n(3),c=function(){function e(e,t,n){this.identityService=e,this.notificationSerivce=t,this.router=n}return e.prototype.ngOnInit=function(){var e=this;this.identityService.getAllAvailableClaims().subscribe(function(t){return e.availableClaims=t}),this.user={alias:"",claims:[],emailAddress:"",id:"",password:"",userName:"",userType:a.UserType.LocalUser,checked:!1,hasLoggedIn:!1,lastLoggedIn:new Date,episodeRequestLimit:0,movieRequestLimit:0,userAccessToken:""}},e.prototype.create=function(){var e=this;(this.user.claims=this.availableClaims,this.user.password&&this.user.password!==this.confirmPass)?this.notificationSerivce.error("Passwords do not match"):this.availableClaims.some(function(e){return!!e.enabled})?this.identityService.createUser(this.user).subscribe(function(t){t.successful?(e.notificationSerivce.success("The user "+e.user.userName+" has been created successfully"),e.router.navigate(["usermanagement"])):t.errors.forEach(function(t){e.notificationSerivce.error(t)})}):this.notificationSerivce.error("Please assign a role")},e=i([r.Component({template:n(264)}),s("design:paramtypes",[l.IdentityService,l.NotificationService,o.Router])],e)}();t.UserManagementAddComponent=c},264:function(e,t){e.exports='\n<h3>Create User</h3>\n<button type="button" class="btn btn-primary-outline" style="float:right;" [routerLink]="[\'/usermanagement/\']">Back</button>\n\n<div class="modal-body" style="margin-top: 45px;">    \n    <div class="col-md-6">\n        <h4>User Details</h4>\n    </div>\n    <div class="col-md-6">\n        <h4>Roles</h4>\n    </div>\n    <div class="row">\n    <div class="col-md-6">\n        <div class="form-group">\n            <label for="username" class="control-label">Username</label>\n            <div>\n                <input type="text" [(ngModel)]="user.userName" class="form-control form-control-custom " id="username" name="username" value="{{user?.userName}}">\n            </div>\n        </div>\n        <div class="form-group">\n            <label for="alias" class="control-label">Alias</label>\n            <div>\n                <input type="text" [(ngModel)]="user.alias" class="form-control form-control-custom " id="alias" name="alias" value="{{user?.alias}}">\n            </div>\n        </div>\n\n        <div class="form-group">\n            <label for="emailAddress" class="control-label">Email Address</label>\n            <div>\n                <input type="text" [(ngModel)]="user.emailAddress" class="form-control form-control-custom " id="emailAddress" name="emailAddress" value="{{user?.emailAddress}}">\n            </div>\n        </div>\n\n        <div class="form-group">\n            <label for="password" class="control-label">Password</label>\n            <div>\n                <input type="password" [(ngModel)]="user.password" class="form-control form-control-custom " id="password" name="password">\n            </div>\n        </div>\n\n        <div class="form-group">\n            <label for="confirmPass" class="control-label">Confirm Password</label>\n            <div>\n                <input type="password" [(ngModel)]="confirmPass" class="form-control form-control-custom " id="confirmPass" name="confirmPass">\n            </div>\n        </div>\n    </div>\n        <div class="col-md-6">\n            <div *ngFor="let c of availableClaims">\n                <div class="form-group">\n                    <div class="checkbox">\n                        <input type="checkbox" [(ngModel)]="c.enabled" [value]="c.value" id="create{{c.value}}" [attr.name]="\'create\' + c.value" ng-checked="c.enabled">\n                        <label for="create{{c.value}}">{{c.value | humanize}}</label>\n\n                    </div>\n                </div>\n            </div>\n            <div class="form-group">\n                <label for="movieRequestLimit" class="control-label">Movie Request Limit</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.movieRequestLimit" class="form-control form-small form-control-custom " id="movieRequestLimit" name="movieRequestLimit" value="{{user?.movieRequestLimit}}">\n                </div>\n            </div>\n\n            <div class="form-group">\n                <label for="episodeRequestLimit" class="control-label">Episode Request Limit</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.episodeRequestLimit" class="form-control form-small form-control-custom " id="episodeRequestLimit" name="episodeRequestLimit" value="{{user?.episodeRequestLimit}}">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="row">\n    <div class="col-md-12">\n        <button type="button" class="btn btn-danger-outline" (click)="create()">Create</button>\n\n    </div>\n</div>'},265:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(10),a=n(89),l=n(10),c=n(3),d=n(3),u=function(){function e(e,t,n,i,s){var r=this;this.identityService=e,this.route=t,this.notificationService=n,this.router=i,this.confirmationService=s,this.route.params.subscribe(function(e){r.userId=e.id,r.identityService.getUserById(r.userId).subscribe(function(e){r.user=e})})}return e.prototype.delete=function(){var e=this;this.confirmationService.confirm({message:"Are you sure that you want to delete this user? If this user has any requests they will also be deleted.",header:"Are you sure?",icon:"fa fa-trash",accept:function(){e.identityService.deleteUser(e.user).subscribe(function(t){t.successful?(e.notificationService.success("The user "+e.user.userName+" was deleted"),e.router.navigate(["usermanagement"])):t.errors.forEach(function(t){e.notificationService.error(t)})})},reject:function(){}})},e.prototype.resetPassword=function(){var e=this;this.identityService.submitResetPassword(this.user.emailAddress).subscribe(function(t){t.successful?(e.notificationService.success("Sent reset password email to "+e.user.emailAddress),e.router.navigate(["usermanagement"])):t.errors.forEach(function(t){e.notificationService.error(t)})})},e.prototype.update=function(){var e=this;this.user.claims.some(function(e){return!!e.enabled})?this.identityService.updateUser(this.user).subscribe(function(t){t.successful?(e.notificationService.success("The user "+e.user.userName+" has been updated successfully"),e.router.navigate(["usermanagement"])):t.errors.forEach(function(t){e.notificationService.error(t)})}):this.notificationService.error("Please assign a role")},e=i([r.Component({template:n(266)}),s("design:paramtypes",[c.IdentityService,l.ActivatedRoute,d.NotificationService,o.Router,a.ConfirmationService])],e)}();t.UserManagementEditComponent=u},266:function(e,t){e.exports='<div *ngIf="user">\n    <h3>User: {{user.userName}}</h3>\n    <button type="button" class="btn btn-primary-outline" style="float:right;" [routerLink]="[\'/usermanagement/\']">Back</button>\n\n\n    <p-confirmDialog></p-confirmDialog>\n    \n    <div class="modal-body" style="margin-top: 45px;">\n        <div class="col-md-6">\n            <h4>User Details</h4>\n        </div>\n        <div class="col-md-6">\n            <h4>Roles</h4>\n        </div>\n        <div class="col-md-6">\n            <div class="form-group">\n                <label for="username" class="control-label">Username</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.userName" [readonly]="true" class="form-control form-control-custom " id="username" name="username" value="{{user?.userName}}">\n                </div>\n            </div>\n            <div class="form-group">\n                <label for="alias" class="control-label">Alias</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.alias" class="form-control form-control-custom " id="alias" name="alias" value="{{user?.alias}}">\n                </div>\n            </div>\n\n            <div class="form-group">\n                <label for="emailAddress" class="control-label">Email Address</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.emailAddress" class="form-control form-control-custom " id="emailAddress" name="emailAddress" value="{{user?.emailAddress}}" [disabled]="user?.userType == 2">\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-6">\n            <div *ngFor="let c of user.claims">\n                <div class="form-group">\n                    <div class="checkbox">\n                        <input type="checkbox" [(ngModel)]="c.enabled" [value]="c.value" id="create{{c.value}}" [attr.name]="\'create\' + c.value" ng-checked="c.enabled">\n                        <label for="create{{c.value}}">{{c.value | humanize}}</label>\n\n                    </div>\n                </div>\n            </div>\n            <div class="form-group">\n                <label for="movieRequestLimit" class="control-label">Movie Request Limit</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.movieRequestLimit" class="form-control form-small form-control-custom " id="movieRequestLimit" name="movieRequestLimit" value="{{user?.movieRequestLimit}}">\n                </div>\n            </div>\n\n            <div class="form-group">\n                <label for="episodeRequestLimit" class="control-label">Episode Request Limit</label>\n                <div>\n                    <input type="text" [(ngModel)]="user.episodeRequestLimit" class="form-control form-small form-control-custom " id="episodeRequestLimit" name="episodeRequestLimit" value="{{user?.episodeRequestLimit}}">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div>\n        <button type="button" class="btn btn-primary-outline" (click)="update()">Update</button>\n        <button type="button" class="btn btn-danger-outline" (click)="delete()">Delete</button>\n        <button type="button"  style="float:right;"  class="btn btn-info-outline" (click)="resetPassword()"  pTooltip="You need your SMTP settings setup">Send Reset Password Link</button>\n\n    </div>\n</div>'},267:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(3),a=function(){function e(e,t,n){this.identityService=e,this.settingsService=t,this.notificationService=n,this.checkAll=!1,this.order="u.userName",this.reverse=!1,this.showBulkEdit=!1}return e.prototype.ngOnInit=function(){var e=this;this.users=[],this.identityService.getUsers().subscribe(function(t){e.users=t}),this.identityService.getAllAvailableClaims().subscribe(function(t){return e.availableClaims=t}),this.settingsService.getCustomization().subscribe(function(t){return e.customizationSettings=t}),this.settingsService.getEmailNotificationSettings().subscribe(function(t){return e.emailSettings=t})},e.prototype.welcomeEmail=function(e){e.emailAddress?this.emailSettings.enabled?(this.identityService.sendWelcomeEmail(e).subscribe(),this.notificationService.success("Sent a welcome email to "+e.emailAddress)):this.notificationService.error("Email Notifications are not setup, cannot send welcome email"):this.notificationService.error("The user needs an email address.")},e.prototype.checkAllBoxes=function(){var e=this;this.checkAll=!this.checkAll,this.users.forEach(function(t){t.checked=e.checkAll})},e.prototype.hasChecked=function(){return this.users.some(function(e){return e.checked})},e.prototype.bulkUpdate=function(){var e=this,t=this.availableClaims.some(function(e){return e.enabled});this.users.forEach(function(n){n.checked&&(t&&(n.claims=e.availableClaims),e.bulkEpisodeLimit&&e.bulkEpisodeLimit>0&&(n.episodeRequestLimit=e.bulkEpisodeLimit),e.bulkMovieLimit&&e.bulkMovieLimit>0&&(n.movieRequestLimit=e.bulkMovieLimit),e.identityService.updateUser(n).subscribe(function(t){t.successful||e.notificationService.error("Could not update user "+n.userName+". Reason "+t.errors[0])}))}),this.notificationService.success("Updated users"),this.showBulkEdit=!1,this.bulkMovieLimit=void 0,this.bulkEpisodeLimit=void 0},e.prototype.setOrder=function(e){this.order===e&&(this.reverse=!this.reverse),this.order=e},e=i([r.Component({template:n(268)}),s("design:paramtypes",[o.IdentityService,o.SettingsService,o.NotificationService])],e)}();t.UserManagementComponent=a},268:function(e,t){e.exports='<h1>User Management</h1>\n\n\n\n<button type="button" class="btn btn-success-outline" [routerLink]="[\'/usermanagement/add\']">Add User</button>\n<button type="button" style="float:right;" class="btn btn-primary-outline"(click)="showBulkEdit = !showBulkEdit" [disabled]="!hasChecked()">Bulk Edit</button>\n\x3c!-- Table --\x3e\n<table class="table table-striped table-hover table-responsive table-condensed table-usermanagement">\n    <thead>\n        <tr>\n            <th style="width:1%">\n                <a>\n                        <td class="checkbox" data-label="Select:">\n                                <input id="all" type="checkbox" ng-checked="checkAll" (change)="checkAllBoxes()">\n                                <label for="all"></label>\n                            </td>\n                </a>\n            </th>\n            <th (click)="setOrder(\'u.userName\')">\n                <a>\n                    Username\n                </a>\n                <span *ngIf="order === \'u.userName\'">\n                    <span [hidden]="reverse"><i class="fa fa-arrow-down" aria-hidden="true"></i></span><span [hidden]="!reverse"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>\n                </span>\n            </th>\n            <th (click)="setOrder(\'u.alias\')">\n                <a>\n                    Alias\n                </a>\n                <span *ngIf="order === \'u.alias\'">\n                    <span [hidden]="reverse"><i class="fa fa-arrow-down" aria-hidden="true"></i></span><span [hidden]="!reverse"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>\n                </span>\n            </th>\n            <th (click)="setOrder(\'u.emailAddress\')">\n                <a>\n                    Email\n                </a>\n                <span *ngIf="order === \'u.emailAddress\'">\n                    <span [hidden]="reverse"><i class="fa fa-arrow-down" aria-hidden="true"></i></span><span [hidden]="!reverse"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>\n                </span>\n            </th>\n            <th>\n                Roles\n            </th>\n            <th (click)="setOrder(\'u.lastLoggedIn\')">\n               <a> Last Logged In</a>\n               <span *ngIf="order === \'u.lastLoggedIn\'">\n                <span [hidden]="reverse"><i class="fa fa-arrow-down" aria-hidden="true"></i></span><span [hidden]="!reverse"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>\n            </span>\n            </th>\n            <th (click)="setOrder(\'u.userType\')">\n                <a>\n                    User Type\n                </a>\n                <span *ngIf="order === \'u.userType\'">\n                    <span [hidden]="reverse"><i class="fa fa-arrow-down" aria-hidden="true"></i></span><span [hidden]="!reverse"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>\n                </span>\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor="let u of users | orderBy: order : reverse : \'case-insensitive\'">\n            <td class="checkbox" data-label="Select:">\n                <input id="{{u.id}}" type="checkbox" [(ngModel)]="u.checked">\n                <label for="{{u.id}}"></label>\n            </td>\n            <td class="td-labelled" data-label="Username:">\n                {{u.userName}}\n            </td>\n            <td class="td-labelled" data-label="Alias:">\n                {{u.alias}}\n            </td>\n            <td class="td-labelled" data-label="Email:">\n                {{u.emailAddress}}\n            </td>\n            <td class="td-labelled" data-label="Roles:">\n                <div *ngFor="let claim of u.claims">\n                    <span *ngIf="claim.enabled">{{claim.value}}</span>\n                </div>\n\n            </td>\n            <td class="td-labelled" data-label="Last Logged In:">\n                {{u.lastLoggedIn | date: \'short\'}}\n            </td>\n            <td class="td-labelled" data-label="User Type:">\n                <span *ngIf="u.userType === 1">Local User</span>\n                <span *ngIf="u.userType === 2">Plex User</span>\n                <span *ngIf="u.userType === 3">Emby User</span>\n            </td>\n            <td>\n                <a [routerLink]="[\'/usermanagement/edit/\' + u.id]" class="btn btn-sm btn-info-outline">Details/Edit</a>\n            </td>\n            <td *ngIf="customizationSettings">\n                <button *ngIf="!u.hasLoggedIn" (click)="welcomeEmail(u)" [disabled]="!customizationSettings.applicationUrl" class="btn btn-sm btn-info-outline">Send Welcome Email</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<p-sidebar [(visible)]="showBulkEdit" position="right" styleClass="ui-sidebar-md side-back">\n<h3>Bulk Edit</h3>\n<hr/>\n<div *ngFor="let c of availableClaims">\n        <div class="form-group">\n            <div class="checkbox">\n                <input type="checkbox" [(ngModel)]="c.enabled" [value]="c.value" id="create{{c.value}}" [attr.name]="\'create\' + c.value" ng-checked="c.enabled">\n                <label for="create{{c.value}}">{{c.value | humanize}}</label>\n            </div>\n        </div>\n    </div>\n\n    <div class="form-group">\n            <label for="movieRequestLimit" class="control-label">Movie Request Limit</label>\n            <div>\n                <input type="text" [(ngModel)]="bulkMovieLimit" class="form-control form-small form-control-custom " id="movieRequestLimit" name="movieRequestLimit" value="{{bulkMovieLimit}}">\n            </div>\n        </div>\n\n        <div class="form-group">\n            <label for="episodeRequestLimit" class="control-label">Episode Request Limit</label>\n            <div>\n                <input type="text" [(ngModel)]="bulkEpisodeLimit" class="form-control form-small form-control-custom " id="episodeRequestLimit" name="episodeRequestLimit" value="{{bulkEpisodeLimit}}">\n            </div>\n        </div>\n    \n<button type="button" class="btn btn-success-outline" (click)="bulkUpdate()">Update Users</button>\n</p-sidebar>'}});
//# sourceMappingURL=4.js.map