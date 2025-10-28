export const FIELD_TYPES = {
  SHORT_TEXT: "SHORT_TEXT",
  LONG_TEXT: "LONG_TEXT",
  CHECKBOX: "CHECKBOX",
  RADIO: "RADIO",
  DROPDOWN: "DROPDOWN",
};

export const FIELD_LABELS = {
  [FIELD_TYPES.SHORT_TEXT]: "Short Text",
  [FIELD_TYPES.LONG_TEXT]: "Long Text",
  [FIELD_TYPES.CHECKBOX]: "Checkboxes",
  [FIELD_TYPES.RADIO]: "Multiple Choice",
  [FIELD_TYPES.DROPDOWN]: "Dropdown",
};

export const DEFAULT_FIELD_CONFIGS = {
  [FIELD_TYPES.SHORT_TEXT]: {
    label: "Short Text",
    placeholder: "Enter text...",
    required: false,
  },
  [FIELD_TYPES.LONG_TEXT]: {
    label: "Long Text",
    placeholder: "Enter detailed response...",
    required: false,
  },
  [FIELD_TYPES.CHECKBOX]: {
    label: "Checkbox Group",
    options: ["Option 1", "Option 2"],
    required: false,
  },
  [FIELD_TYPES.RADIO]: {
    label: "Multiple Choice",
    options: ["Option 1", "Option 2"],
    required: false,
  },
  [FIELD_TYPES.DROPDOWN]: {
    label: "Dropdown",
    options: ["Option 1", "Option 2"],
    required: false,
  },
};
