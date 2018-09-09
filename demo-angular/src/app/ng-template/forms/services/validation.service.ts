import { Injectable } from '@angular/core';
import { ValidationHelper } from '../helpers/validation.helper';

@Injectable()
export class ValidationService {

  constructor() {
  }

  buildErrorsArray(structure: any): any {
    const errors = {};
    const component = this;
    Object.keys(structure).forEach(function (key) {
      const field = structure[key];
      const rules = component.addRules(field['rules']);
      errors[field['name']] = rules;
    });
    return errors;
  }

  buildServerErrorsArray(structure: any): any {
    const errors = {};
    const component = this;
    Object.keys(structure).forEach(function (key) {
      const field = structure[key];
      errors[field['name']] = [];
    });
    return errors;
  }

  private addRules(rules: any): any {
    let result_rules = {};
    for (let i = 0; i < rules.length; i++) {
      let rule = this.addRule(rules[i]);
      if (rule != null) {
        result_rules[rule] = false;
      }
    }
    return result_rules;
  }

  private addRule(rule: any): any {
    if (rule === 'required') {
      return 'required';
    }
  }

  public checkForm(errors: any, model: any): boolean {
    let valid = true;
    Object.keys(errors).forEach(function (key) {
      if (!Array.isArray(model[key])) {
        if (errors[key] !== undefined
          && errors[key].required !== undefined) {
          if (ValidationHelper.required(model[key])) {
            valid = false;
            errors[key].required = true;
          } else {
            errors[key].required = false;
          }
        }
      } else {
        if (errors[key] !== undefined
          && errors[key].empty !== undefined) {
          if (ValidationHelper.empty(model[key])) {
            valid = false;
            errors[key].empty = true;
          } else {
            errors[key].empty = false;
          }
        }
        Object.keys(errors[key]).forEach(function (key2) {
          if (errors[key][key2] !== undefined
            && errors[key][key2].required !== undefined) {
            if (ValidationHelper.required(model[key][key2])) {
              valid = false;
              errors[key][key2].required = true;
            } else {
              errors[key][key2].required = false;
            }
          }
        });
      }
    });
    return valid;
  }
}
