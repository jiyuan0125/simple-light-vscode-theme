const { getColors } = require("./primer");

function getTheme({ name }) {

  const primer = getColors();

  const workbenchForeground = primer.gray[8];
  const editorForeground = primer.gray[9];

  return {
    name: name,
    colors: {
      focusBorder: primer.blue[4],
      foreground: primer.gray[7],
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      "textLink.foreground": primer.blue[5],
      "textLink.activeForeground": primer.blue[6],
      "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.border": primer.gray[2],
      "textCodeBlock.background": primer.gray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": "#159739",
      "button.foreground": primer.white,
      "button.hoverBackground": "#138934",
      "button.secondaryBackground": primer.gray[2],
      "button.secondaryForeground": primer.black,
      "button.secondaryHoverBackground": primer.gray[3],

      "checkbox.background": primer.gray[0],
      "checkbox.border": primer.gray[3],

      "dropdown.background": primer.gray[0],
      "dropdown.border": primer.gray[2],
      "dropdown.foreground": workbenchForeground,
      "dropdown.listBackground": primer.white,

      "input.background": primer.gray[0],
      "input.border": primer.gray[2],
      "input.foreground": workbenchForeground,
      "input.placeholderForeground": primer.gray[4],

      "badge.foreground": primer.blue[6],
      "badge.background": primer.blue[1],

      "progressBar.background": primer.blue[4],

      "titleBar.activeForeground": workbenchForeground,
      "titleBar.activeBackground": primer.white,
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": primer.gray[1],
      "titleBar.border": primer.gray[2],

      "activityBar.foreground": primer.white,
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.activeBackground": primer.gray[8],
      "activityBar.background": primer.gray[9],
      "activityBarBadge.foreground": primer.white,
      "activityBarBadge.background": primer.green[5],
      "activityBar.activeBorder": primer.white,
      "activityBar.border": primer.gray[2],

      "sideBar.foreground": primer.gray[6],
      "sideBar.background": primer.gray[1],
      "sideBar.border": primer.gray[2],
      "sideBarTitle.foreground": workbenchForeground,
      "sideBarSectionHeader.foreground": workbenchForeground,
      "sideBarSectionHeader.background": primer.gray[1],
      "sideBarSectionHeader.border": primer.gray[2],

      "list.hoverForeground": workbenchForeground,
      "list.inactiveSelectionForeground": workbenchForeground,
      "list.activeSelectionForeground": workbenchForeground,
      "list.hoverBackground": "#ebf0f4",
      "list.inactiveSelectionBackground": "#e8eaed",
      "list.activeSelectionBackground": "#e2e5e9",
      "list.inactiveFocusBackground": primer.blue[1],
      "list.focusBackground": "#cce5ff",

      "tree.indentGuidesStroke": primer.gray[2],

      "notificationCenterHeader.foreground": primer.gray[5],
      "notificationCenterHeader.background": primer.gray[2],
      "notifications.foreground": workbenchForeground,
      "notifications.background": primer.gray[0],
      "notifications.border": primer.gray[2],
      "notificationsErrorIcon.foreground": primer.red[5],
      "notificationsWarningIcon.foreground": primer.orange[6],
      "notificationsInfoIcon.foreground": primer.blue[6],

      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": workbenchForeground,
      "quickInput.background": primer.gray[0],
      "quickInput.foreground": workbenchForeground,

      "editorGroupHeader.tabsBackground": primer.gray[1],
      "editorGroupHeader.tabsBorder": primer.gray[2],
      "editorGroup.border": primer.gray[2],
      "tab.activeForeground": workbenchForeground,
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": primer.gray[1],
      "tab.activeBackground": primer.white,
      "tab.hoverBackground": primer.white,
      "tab.unfocusedHoverBackground": primer.white,
      "tab.border": primer.gray[2],
      "tab.unfocusedActiveBorderTop": primer.gray[2],
      "tab.activeBorder": primer.gray[9],
      "tab.unfocusedActiveBorder": primer.white,

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": workbenchForeground,
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": primer.gray[0],

      "editor.foreground": editorForeground,
      "editor.background": primer.white,
      "editorWidget.background": primer.gray[1],
      "editor.foldBackground": "#d1d5da11",
      "editor.lineHighlightBackground": primer.gray[1],
      "editorLineNumber.foreground": "#1b1f234d",
      "editorLineNumber.activeForeground": editorForeground,
      "editorInlayHint.foreground": primer.gray[4],
      "editorInlayHint.background": primer.gray[1],
      "editorIndentGuide.background": "#eff2f6",
      "editorIndentGuide.activeBackground": "#d7dbe0",
      "editorWhitespace.foreground": primer.gray[3],
      "editorCursor.foreground": primer.gray[8],

      "editor.findMatchBackground": primer.yellow[4],
      "editor.findMatchHighlightBackground": "#ffdf5d66",
      "editor.linkedEditingBackground": "#0366d611",
      "editor.inactiveSelectionBackground": "#0366d611",
      "editor.selectionBackground": "#0366d625",
      "editor.selectionHighlightBackground": "#34d05840",
      "editor.selectionHighlightBorder": "#34d05800",
      "editor.wordHighlightBackground": "#34d05800",
      "editor.wordHighlightStrongBackground": "#34d05800",
      "editor.wordHighlightBorder": "#24943e99",
      "editor.wordHighlightStrongBorder": "#24943e50",
      "editorBracketHighlight.foreground1": primer.blue[6],
      "editorBracketHighlight.foreground2": primer.violet[6],
      "editorBracketHighlight.foreground3": primer.green[6],
      "editorBracketHighlight.foreground4": primer.purple[6],
      "editorBracketHighlight.foreground5": primer.gray[6],
      "editorBracketHighlight.foreground6": primer.yellow[9],
      "editorBracketHighlight.unexpectedBracket.foreground": primer.red[6],
      "editorBracketMatch.background": "#34d05840",
      "editorBracketMatch.border": "#34d05800",

      "editorGutter.modifiedBackground": primer.blue[4],
      "editorGutter.addedBackground": primer.green[5],
      "editorGutter.deletedBackground": primer.red[5],

      "diffEditor.insertedTextBackground": "#34d05822",
      "diffEditor.removedTextBackground": "#d73a4922",

      "scrollbar.shadow": "#6a737d33",
      "scrollbarSlider.background": "#959da533",
      "scrollbarSlider.hoverBackground": "#959da544",
      "scrollbarSlider.activeBackground": "#959da588",
      "editorOverviewRuler.border": primer.white,

      "panel.background": primer.white,
      "panel.border": primer.gray[2],
      "panelTitle.activeBorder": primer.gray[9],
      "panelTitle.activeForeground": workbenchForeground,
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": primer.gray[2],

      "terminalCursor.foreground": primer.gray[8],

      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.orange[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],

      "debugToolBar.background": primer.white,
      "editor.stackFrameHighlightBackground": "#ffd33d33",
      "editor.focusedStackFrameHighlightBackground": "#28a74525",

      "settings.headerForeground": workbenchForeground,
      "settings.modifiedItemIndicator": primer.blue[4],
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    tokenColors: [
      {
        settings: {
          foreground: primer.gray[9],
        }
      },
      {
        name: "Comment",
        scope: "comment",
        settings: {
          foreground: primer.gray[4],
        },
      },
      {
        name: "Variable",
        scope: [
          "variable.language",
          "variable.other"
        ],
        settings: {
          foreground: primer.black,
        },
      },
      {
        name: "Class name",
        scope: [
          "entity.name.class",
          "entity.name.type",
          "entity.name.namespace",
          "entity.name.scope-resolution"
        ],
        settings: {
          foreground: primer.yellow[9],
        },
      },
      {
        name: "Function name",
        scope: ["entity.name.function"],
        settings: {
          foreground: primer.violet[9],
        },
      },
      {
        name: "Function argument",
        scope: "variable.parameter",
        settings: {
          foreground: editorForeground,
        },
      },
      {
        name: "Tag name",
        scope: "entity.name.tag",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        name: "Keyword",
        scope: "keyword",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        name: "Storage",
        scope: "storage",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        name: "Storage",
        scope: "support.type.property-name",
        settings: {
          foreground: primer.black,
        },
      },
      {
        name: "Number",
        scope: ["constant.numeric"],
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        name: "String",
        scope: [
          "string",
        ],
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        name: "Invalid",
        scope: "invalid",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        name: "Regexp",
        scope: ["string.regexp"],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        name: "Library constant",
        scope: [
          "support.constant",
          "support.variable"
        ],
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        name: "Markup Quote",
        scope: "markup.quote",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        name: "Markup: Underline",
        scope: "markup.underline",
        settings: {
          fontStyle: "underline"
        }
      },
      {
        name: "Markup: Emphasis",
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: editorForeground,
        },
      },
      {
        name: "Markup: Strong",
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: editorForeground,
        },
      },
    ],
    semanticHighlighting: true,
    semanticTokenColors: {
      newOperator: primer.blue[6],
      stringLiteral: primer.green[6],
      customLiteral: primer.violet[9],
      numberLiteral: primer.orange[6],
    }
  };
}

module.exports = getTheme;
