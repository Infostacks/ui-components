import React from "react";
import { Blockquote } from "@tiptap/extension-blockquote";
import { Bold } from "@tiptap/extension-bold";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Code } from "@tiptap/extension-code";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Document } from "@tiptap/extension-document";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { History } from "@tiptap/extension-history";
import { Italic } from "@tiptap/extension-italic";
import { Link } from "@tiptap/extension-link";
import { ListItem } from "@tiptap/extension-list-item";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Strike } from "@tiptap/extension-strike";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Text } from "@tiptap/extension-text";
import {
    HeadingWithAnchor,
    LinkBubbleMenu,
    LinkBubbleMenuHandler,
    MenuButtonAddTable,
    MenuButtonBlockquote,
    MenuButtonBold,
    MenuButtonBulletedList,
    MenuButtonCode,
    MenuButtonCodeBlock,
    MenuButtonEditLink,
    MenuButtonItalic,
    MenuButtonOrderedList,
    MenuButtonRemoveFormatting,
    MenuButtonStrikethrough,
    MenuButtonSubscript,
    MenuButtonSuperscript,
    MenuButtonTaskList,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    // MenuSelectHeading,
    ResizableImage,
    RichTextEditor,
    TableBubbleMenu,
    TableImproved,
    MenuButtonImageUpload
    // type RichTextEditorRef,
} from "mui-tiptap";


const CustomLinkExtension = Link.extend({
    inclusive: false,
});

const CustomSubscript = Subscript.extend({
    excludes: "superscript",
});

const CustomSuperscript = Superscript.extend({
    excludes: "subscript",
});

const extensions = [
    // We use some but not all of the extensions from
    // https://tiptap.dev/api/extensions/starter-kit, plus a few additional ones

    // Note that the Table extension must come before other nodes. See README
    TableImproved.configure({
        resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,

    BulletList,
    CodeBlock,
    Document,
    HardBreak,
    ListItem,
    OrderedList,
    Paragraph,
    CustomSubscript,
    CustomSuperscript,
    Text,

    // Blockquote must come after Bold, since we want the "Cmd+B" shortcut to
    // have lower precedence than the Blockquote "Cmd+Shift+B" shortcut. See
    // README
    Bold,
    Blockquote,

    Code,
    Italic,
    Strike,
    CustomLinkExtension.configure({
        autolink: true,
        linkOnPaste: true,
        openOnClick: false,
    }),
    LinkBubbleMenuHandler,

    // Extensions
    Gapcursor,
    HeadingWithAnchor.configure({
        // People shouldn't typically need more than 3 levels of headings, so
        // keep a more minimal set (than the default 6) to keep things simpler
        // and less chaotic.
        levels: [1, 2, 3],
    }),

    ResizableImage,

    // When images are dragged, we want to show the "drop cursor" for where they'll
    // land
    Dropcursor,

    TaskList,
    TaskItem.configure({
        nested: true,
    }),

    Placeholder.configure({
        placeholder: "Add your own content here...",
    }),

    // We use the regular `History` (undo/redo) extension when not using
    // collaborative editing
    History,
];

export interface RichTextEditorTipTapProps {
    editable: boolean
    value: String;
    setValue: Function;
    handleFiles: Function | null;
}

export default function RichTextEditorTipTap({
    editable = true,
    value,
    setValue,
    handleFiles,
}: RichTextEditorTipTapProps) {
    const rteRef = React.useRef(null);

    return (
        <RichTextEditor
            editable={editable}
            className="MuiTiptap-RichTextContent-root.MuiTiptap-RichTextField-content css-anumxs-FieldContainer-notchedOutlin"
            ref={rteRef}
            content={value}
            extensions={extensions}
            onUpdate={(current) => {
                setValue(current.editor.getHTML())
            }}
            renderControls={() =>
                editable && (
                    <MenuControlsContainer>
                        <MenuSelectHeading />

                        <MenuDivider />

                        <MenuButtonBold />
                        <MenuButtonItalic />
                        <MenuButtonStrikethrough />
                        <MenuButtonSubscript />
                        <MenuButtonSuperscript />

                        <MenuDivider />

                        <MenuButtonEditLink />

                        <MenuDivider />

                        <MenuButtonOrderedList />
                        <MenuButtonBulletedList />
                        <MenuButtonTaskList />

                        <MenuDivider />

                        <MenuButtonBlockquote />

                        <MenuDivider />

                        <MenuButtonCode />

                        <MenuButtonCodeBlock />

                        <MenuDivider />

                        <MenuButtonAddTable />


                        {
                            handleFiles !== null &&
                            <MenuButtonImageUpload
                                onUploadFiles={(files) =>
                                    // For the sake of a demo, we don't have a server to upload the files
                                    // to, so we'll instead convert each one to a local "temporary" object
                                    // URL. This will not persist properly in a production setting. You
                                    // should instead upload the image files to your server, or perhaps
                                    // convert the images to bas64 if you would like to encode the image
                                    // data directly into the editor content, though that can make the
                                    // editor content very large.
                                    {
                                        const covFiles = files.map((file) => ({
                                            src: URL.createObjectURL(file),
                                            alt: file.name,
                                        }));
                                        handleFiles(covFiles);
                                        return covFiles;
                                    }
                                }
                            />
                        }

                        <MenuDivider />

                        <MenuButtonRemoveFormatting />
                    </MenuControlsContainer>
                )
            }
        >
            {() => (
                <>
                    <LinkBubbleMenu />
                    <TableBubbleMenu />
                </>
            )}
        </RichTextEditor>
    )
}