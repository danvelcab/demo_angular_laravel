/**
 * Created by Daniel on 07/09/2018.
 */
export class ProjectFormConfiguration {
  public static structure = [
    {
      name: "title",
      label: "title",
      placeholder: "write a title",
      type: "input-text",
      default_value: "default title",
      rules: [
        "required"
      ],
      style: [
        "col-3"
      ],
      config: {
        hasLabel: true,
        hasHelp: false,
      }
    },
    {
      name: "description",
      label: "description",
      placeholder: "write a description",
      type: "input-text",
      default_value: "default description",
      rules: [
        "required"
      ],
      style: [
        "col-6"
      ],
      config: {
        hasLabel: true,
        hasHelp: false,
      }
    },
    {
      name: "status",
      label: "status",
      placeholder: "write a status",
      type: "input-text",
      default_value: "1",
      rules: [
        "required"
      ],
      style: [
        "col-6"
      ],
      config: {
        hasLabel: true,
        hasHelp: false,
      }
    },
    {
      name: "visible",
      label: "visible",
      placeholder: "write a visible",
      type: "input-text",
      default_value: "1",
      rules: [
        "required"
      ],
      style: [
        "col-6"
      ],
      config: {
        hasLabel: true,
        hasHelp: false,
      }
    },
    {
      name: "estimated_start_date",
      label: "estimated_start_date",
      placeholder: "write a estimated_start_date",
      type: "input-text",
      default_value: "2018-01-01",
      rules: [
        "required"
      ],
      style: [
        "col-6"
      ],
      config: {
        hasLabel: true,
        hasHelp: false,
      }
    },
    {
      name: "estimated_end_date",
      label: "estimated_end_date",
      placeholder: "write a estimated_end_date",
      type: "input-text",
      default_value: "2019-01-01",
      rules: [
        "required"
      ],
      style: [
        "col-6"
      ],
      config: {
        hasLabel: true,
        hasHelp: false,
      }
    }
  ]
}
