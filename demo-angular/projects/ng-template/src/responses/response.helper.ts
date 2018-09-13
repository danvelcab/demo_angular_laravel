import {Injectable} from '@angular/core';
import { MessageService } from './message.service';
import {TranslateService} from '@ngx-translate/core';
import { NavigationHelper } from '../navigation/navigation.helper';
import { CodesHelper } from './codes.helper';

@Injectable()
export class ResponseHelper {

    constructor(private messageService: MessageService,
                private translateService: TranslateService,
                private navigationHelper: NavigationHelper) {
    }

    public handleError(error): void {
        if (error.status === CodesHelper.EXPIRED_TOKEN) {
            // let token_expired = SessionHelper.getLocalStorageField('token_expired');
            // if (token_expired == 'false') {
                // this.translateService.get('token-expired').subscribe((res: string) => {
                //     this.messageService.showErrorMessage(res);
                // });
                this.navigationHelper.navigateTo('login-page');
                // SessionHelper.setLocalStorageField('token_expired', true);
            // }
        } else {
            this.messageService.showServerErrorMessage(error);
        }
    }

}
