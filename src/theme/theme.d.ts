type textPosition = "center" | "left" | "right";

declare global {
  declare module "@mui/material/styles" {
    interface Theme {
      layout: {
        wrapperHeight: string;
        drawer: {
          width: number;
          activeButtonColor: string;

          heading: {
            padding: string;
            textAlign: textPosition;
          };
        };
      };
      listItemButton: {
        color: {
          active: string;
        };
      };
      pages: {
        background: string;
        notes: {
          title: {
            margin: string;
          };
        };
        create: {
          title: {
            margin: string;
          };
          form: {
            textArea: {
              rows: number;
            };
          };
        };
      };
    }

    interface ThemeOptions {
      layout?: {
        wrapperHeight?: string;
        drawer?: {
          width?: number;
          activeButtonColor?: string;
          heading?: {
            padding?: string;
            textAlign?: textPosition;
          };
        };
      };
      listItemButton?: {
        color?: {
          active?: string;
        };
      };
      pages?: {
        background?: string;
        notes?: {
          title?: {
            margin?: string;
          };
        };
        create?: {
          title?: {
            margin?: string;
          };
          form?: {
            textArea?: {
              rows?: number;
            };
          };
        };
      };
    }
  }
}
