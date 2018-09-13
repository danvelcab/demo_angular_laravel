
import {Injectable} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CodesHelper } from './codes.helper';
import { TextsHelper } from './texts.helper';

declare var Noty: any;

@Injectable()
export class MessageService {

    public static INVALID_TOKEN_MESSAGE = 'Sus credenciales no son correctas';
    public static SUCCESS_MESSAGE_KEY = 'success_message';
    public static WIZARD_ERROR_MESSAGE = 'There are some errors yet';

    public success_message = 'success_message';

    constructor(translate: TranslateService) {
        // translate.get(MessageService.SUCCESS_MESSAGE_KEY).subscribe((res: string) => {
        //     this.success_message = res;
        // });
    }

    public showServerErrorMessage(message): void {
        if (message.status === CodesHelper.FAILED_VALIDATOR_CODE) {
            let messages = '';
            const json = JSON.parse(message._body);
            for (let i = 0; i < json.length; i++) {
                messages = messages + json[i] + ' ';
            }
            this.showErrorMessage(messages);
        } else if (message.status === CodesHelper.NO_PERMISSIONS || message.status === CodesHelper.NOT_FOUND
                || message.status === CodesHelper.SERVER_ERROR_CODE) {
          this.showErrorMessage(this.getTextByStatus(message.status));
        } else {
            this.showErrorMessage(message.error);
        }
    }
    public showErrorMessage(message: string): void {
        new Noty(
            {
                type: 'error',
                timeout: 5000,
                theme: 'relax',
                text: message,
            }
        ).show();
    }
    public showSuccessMessage(message: string = null): void {
        if (!message) {
            message = this.success_message;
        }
        new Noty(
            {
                type: 'success',
                timeout: 5000,
                theme: 'relax',
                text: message,
            }
        ).show();
    }
    public showWizardErrorMessage(): void {
        let message = MessageService.WIZARD_ERROR_MESSAGE;
        new Noty(
            {
                type: 'error',
                timeout: 5000,
                theme: 'relax',
                text: message,
            }
        ).show();
    }
    public handlerError(code, message) {
        if (code === CodesHelper.INVALID_TOKEN) {
            message = MessageService.INVALID_TOKEN_MESSAGE;
        }
        this.showErrorMessage(message);
    }

    public getTextByStatus(status: string): string {
        return TextsHelper.texts[this.getLanguage()][status];
    }
    private getLanguage(): string {
        return 'en';
    }
}
