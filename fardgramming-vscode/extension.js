const vscode = require("vscode");

function activate(context) {

    // ============================================================
    // FARDGRAMMING- KEYWORDS
    // ============================================================

    const keywords = [
        "j*b",
        "lit",
        "do",
        "gru",
        "no_no_square",
        "facts_no_cap",
        "facts_not_cap",
        "cap",
        "poopoo",
        "infard",
        "lmao",
        "sonion",

        "ts",
        "mf",
        "be",
        "rn",
        "frfr",

        "iz",
        "le",
        "equal",
        "snot",

        "*griddy",
        "griddy*",

        "/brownliquid",

        "ohio3am",
        "subway_surfers_bussin",

        "lore",
        "pee",
        "fourevor",

        "be_patient",
        "im_gonna_wreck_it",
        "fix_it_felix"
    ];

    const keywordSet = new Set(keywords);


    // ============================================================
    // HOVER DOCUMENTATION
    // ============================================================

    const documentation = {

        "j*b": {
            title: "j*b",
            description: "Integer type used when defining a variable or function.",
            example: "lit j*b score iz crazyy lmao"
        },

        "lit": {
            title: "lit",
            description: "Marks a j*b declaration.",
            example: "lit j*b score iz crazyy lmao"
        },

        "gru": {
            title: "gru",
            description: "Begins a conditional statement.",
            example: "gru score le equal 10"
        },

        "no_no_square": {
            title: "no_no_square",
            description: "Alternative branch for a gru statement.",
            example: "no_no_square"
        },

        "facts_no_cap": {
            title: "facts_no_cap",
            description: "Boolean value: true.",
            example: "poopoo facts_no_cap lmao"
        },

        "facts_not_cap": {
            title: "facts_not_cap",
            description: "Boolean value: true.",
            example: "poopoo facts_not_cap lmao"
        },

        "cap": {
            title: "cap",
            description: "Boolean value: false.",
            example: "poopoo cap lmao"
        },

        "poopoo": {
            title: "poopoo",
            description: "Outputs or returns a value.",
            example: 'poopoo "Hello world!" lmao'
        },

        "infard": {
            title: "infard",
            description: "Gets input from the programmer/user.",
            example: 'infard "Who won the match? " lmao'
        },

        "lmao": {
            title: "lmao",
            description: "Ends a statement.",
            example: "ts mf score be 0 rn frfr lmao"
        },

        "ts": {
            title: "ts",
            description: "Part of variable definition syntax.",
            example: "ts mf score be 0 rn frfr lmao"
        },

        "mf": {
            title: "mf",
            description: "Part of variable definition syntax.",
            example: "ts mf score be 0 rn frfr lmao"
        },

        "be": {
            title: "be",
            description: "Part of definition syntax.",
            example: "ts mf score be 0 rn frfr lmao"
        },

        "rn": {
            title: "rn",
            description: "Part of definition syntax.",
            example: "ts mf score be 0 rn frfr lmao"
        },

        "frfr": {
            title: "frfr",
            description: "Part of definition syntax.",
            example: "ts mf score be 0 rn frfr lmao"
        },

        "iz": {
            title: "iz",
            description: "Expression/operator syntax.",
            example: "lit j*b score iz crazyy lmao"
        },

        "le": {
            title: "le equal",
            description: "Begins an equality comparison.",
            example: "gru John le equal Mike"
        },

        "equal": {
            title: "equal",
            description: "Completes the le equal comparison.",
            example: "gru John le equal Mike"
        },

        "snot": {
            title: "snot",
            description: "Logical OR operator.",
            example: "gru John le equal Mike snot John"
        },

        "*griddy": {
            title: "*griddy",
            description: "Starts a code block.",
            example: "*griddy"
        },

        "griddy*": {
            title: "griddy*",
            description: "Ends a code block.",
            example: "griddy*"
        },

        "/brownliquid": {
            title: "/brownliquid",
            description: "Starts a comment.",
            example: "/brownliquid this is a comment"
        },

        "ohio3am": {
            title: "ohio3am",
            description: "Defines the main program entry point.",
            example: "ohio3am lmao"
        },

        "subway_surfers_bussin": {
            title: "subway_surfers_bussin",
            description: "Ends the Fardgramming- program.",
            example: "subway_surfers_bussin lmao"
        },

        "lore": {
            title: "lore",
            description: "Creates a while loop.",
            example: "lore John = 10"
        },

        "pee": {
            title: "pee",
            description: "Creates a for loop.",
            example: "pee John"
        },

        "fourevor": {
            title: "fourevor",
            description: "Creates a forever loop.",
            example: "fourevor"
        },

        "be_patient": {
            title: "be_patient",
            description: "Waits for a specified number of seconds.",
            example: "be_patient 6"
        },

        "im_gonna_wreck_it": {
            title: "im_gonna_wreck_it",
            description: "Breaks out of the current loop.",
            example: "im_gonna_wreck_it lmao"
        },

        "fix_it_felix": {
            title: "fix_it_felix",
            description: "Continues to the next loop iteration.",
            example: "fix_it_felix lmao"
        }
    };


    // ============================================================
    // HOVER
    // ============================================================

    const hoverProvider =
        vscode.languages.registerHoverProvider(
            "fardgramming",
            {
                provideHover(document, position) {

                    const wordRange =
                        document.getWordRangeAtPosition(position);

                    if (!wordRange) {
                        return;
                    }

                    const word =
                        document.getText(wordRange);

                    const info =
                        documentation[word];

                    if (!info) {
                        return;
                    }

                    const markdown =
                        new vscode.MarkdownString();

                    markdown.appendMarkdown(
                        `### ${info.title}\n\n`
                    );

                    markdown.appendMarkdown(
                        `${info.description}\n\n`
                    );

                    markdown.appendMarkdown(
                        "**Example:**\n\n"
                    );

                    markdown.appendCodeblock(
                        info.example,
                        "fardgramming"
                    );

                    return new vscode.Hover(
                        markdown,
                        wordRange
                    );
                }
            }
        );

    context.subscriptions.push(hoverProvider);


    // ============================================================
    // AUTOCOMPLETE
    // ============================================================

    const completionProvider =
        vscode.languages.registerCompletionItemProvider(
            "fardgramming",
            {
                provideCompletionItems() {

                    return keywords.map(keyword => {

                        const item =
                            new vscode.CompletionItem(
                                keyword,
                                vscode.CompletionItemKind.Keyword
                            );

                        item.detail =
                            "Fardgramming-";

                        if (documentation[keyword]) {
                            item.documentation =
                                new vscode.MarkdownString(
                                    documentation[keyword].description
                                );
                        }

                        return item;
                    });
                }
            }
        );

    context.subscriptions.push(completionProvider);


    // ============================================================
    // ERROR CHECKING
    // ============================================================

    const diagnosticCollection =
        vscode.languages.createDiagnosticCollection(
            "fardgramming"
        );

    context.subscriptions.push(
        diagnosticCollection
    );


    function validateDocument(document) {

        if (document.languageId !== "fardgramming") {
            diagnosticCollection.delete(document.uri);
            return;
        }

        const diagnostics = [];

        // ============================================================
        // FIND ALL DEFINED VARIABLES AND FUNCTIONS FIRST
        // ============================================================

        const variables = new Set();
        const functions = new Set();

        for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {

            const text = document.lineAt(lineNumber).text;

            // Ignore comments
            const code = text.split("/brownliquid")[0];

            // --------------------------------------------------------
            // Variable definition:
            //
            // ts mf NAME be VALUE rn frfr lmao
            // --------------------------------------------------------

            const variableMatch = code.match(
                /\bts\s+mf\s+([A-Za-z_][A-Za-z0-9_]*)\s+be\b/
            );

            if (variableMatch) {
                variables.add(variableMatch[1]);
            }

            // --------------------------------------------------------
            // Function definition:
            //
            // lit j*b NAME iz crazyy lmao
            // --------------------------------------------------------

            const functionMatch = code.match(
                /\blit\s+j\*b\s+([A-Za-z_][A-Za-z0-9_]*)\s+iz\b/
            );

            if (functionMatch) {
                functions.add(functionMatch[1]);
            }
        }


        // ============================================================
        // CHECK EACH LINE
        // ============================================================

        for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {

            const text = document.lineAt(lineNumber).text;

            // Remove comments
            const code = text.split("/brownliquid")[0];

            if (!code.trim()) {
                continue;
            }

            // ========================================================
            // VARIABLE DEFINITIONS
            // ========================================================

            const variableMatch = code.match(
                /\bts\s+mf\s+([A-Za-z_][A-Za-z0-9_]*)\s+be\b/
            );

            // ========================================================
            // FUNCTION DEFINITIONS
            // ========================================================

            const functionMatch = code.match(
                /\blit\s+j\*b\s+([A-Za-z_][A-Za-z0-9_]*)\s+iz\b/
            );


            // ========================================================
            // TOKENIZE LINE
            // ========================================================

            const tokens = code.match(
                /"(?:\\.|[^"\\])*"|\S+/g
            );

            if (!tokens) {
                continue;
            }


            // ========================================================
            // CHECK TOKENS
            // ========================================================

            for (let i = 0; i < tokens.length; i++) {

                const word = tokens[i];

                // ----------------------------------------------------
                // Strings are valid
                // ----------------------------------------------------

                if (word.startsWith('"')) {
                    continue;
                }


                // ----------------------------------------------------
                // Numbers are valid
                // ----------------------------------------------------

                if (!isNaN(word)) {
                    continue;
                }


                // ----------------------------------------------------
                // Special Fardgramming syntax
                // ----------------------------------------------------

                if (
                    word === "j*b" ||
                    word === "*griddy" ||
                    word === "griddy*" ||
                    word === "iz" ||
                    word === "le" ||
                    word === "equal" ||
                    word === "=" ||
                    word === "+" ||
                    word === "-" ||
                    word === "snot" ||
                    word === "infard"
                ) {
                    continue;
                }


                // ----------------------------------------------------
                // Keywords
                // ----------------------------------------------------

                if (keywordSet.has(word)) {
                    continue;
                }

                if (word === "infard") {
                    continue;
                }


                // ----------------------------------------------------
                // Normal identifier?
                // ----------------------------------------------------

                if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(word)) {

                    // ================================================
                    // THIS NAME IS BEING DEFINED
                    // ================================================

                    if (
                        variableMatch &&
                        word === variableMatch[1]
                    ) {
                        continue;
                    }

                    if (
                        functionMatch &&
                        word === functionMatch[1]
                    ) {
                        continue;
                    }


                    // ================================================
                    // DEFINED VARIABLE
                    // ================================================

                    if (variables.has(word)) {
                        continue;
                    }


                    // ================================================
                    // DEFINED FUNCTION
                    // ================================================

                    if (functions.has(word)) {
                        continue;
                    }


                    // ================================================
                    // SPECIAL INTERNAL WORDS
                    // ================================================

                    // These are currently part of your language syntax
                    // but aren't formal variables.

                    if (
                        word === "crazyy" ||
                        word === "lazyahh" ||
                        word === "sonion"
                    ) {
                        continue;
                    }


                    // ================================================
                    // UNDEFINED VARIABLE / NAME
                    // ================================================

                    const start = text.indexOf(word);

                    if (start === -1) {
                        continue;
                    }

                    const range = new vscode.Range(
                        lineNumber,
                        start,
                        lineNumber,
                        start + word.length
                    );

                    diagnostics.push(
                        new vscode.Diagnostic(
                            range,
                            `"${word}" has not been defined.`,
                            vscode.DiagnosticSeverity.Error
                        )
                    );

                    continue;
                }


                // ----------------------------------------------------
                // Unknown punctuation / syntax
                // ----------------------------------------------------

                const start = text.indexOf(word);

                if (start === -1) {
                    continue;
                }

                const range = new vscode.Range(
                    lineNumber,
                    start,
                    lineNumber,
                    start + word.length
                );

                diagnostics.push(
                    new vscode.Diagnostic(
                        range,
                        `Unknown Fardgramming- syntax: ${word}`,
                        vscode.DiagnosticSeverity.Error
                    )
                );
            }
        }


    // ============================================================
    // CHECK *GRIDDY / GRIDDY* BLOCKS
    // ============================================================

    let blockDepth = 0;

    for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {

        const text = document.lineAt(lineNumber).text;

        const code = text.split("/brownliquid")[0].trim();

        if (code === "*griddy") {
            blockDepth++;
        }

        if (code === "griddy*") {

            if (blockDepth === 0) {

                const range = new vscode.Range(
                    lineNumber,
                    0,
                    lineNumber,
                    text.length
                );

                diagnostics.push(
                    new vscode.Diagnostic(
                        range,
                        "griddy* has no matching *griddy.",
                        vscode.DiagnosticSeverity.Error
                    )
                );

            } else {
                blockDepth--;
            }
        }
    }


    // ============================================================
    // MISSING BLOCK ENDINGS
    // ============================================================

    if (blockDepth > 0) {

        const lastLine = document.lineCount - 1;

        const text = document.lineAt(lastLine).text;

        diagnostics.push(
            new vscode.Diagnostic(
                new vscode.Range(
                    lastLine,
                    0,
                    lastLine,
                    text.length
                ),
                `Missing ${blockDepth} griddy* block ending(s).`,
                vscode.DiagnosticSeverity.Error
            )
        );
    }


    // ============================================================
    // SEND ERRORS TO VS CODE
    // ============================================================

    diagnosticCollection.set(
        document.uri,
        diagnostics
    );
}


    // ============================================================
    // VALIDATE DOCUMENTS
    // ============================================================

    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(
            event => {
                validateDocument(
                    event.document
                );
            }
        )
    );

    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument(
            document => {
                validateDocument(
                    document
                );
            }
        )
    );

    context.subscriptions.push(
        vscode.workspace.onDidCloseTextDocument(
            document => {
                diagnosticCollection.delete(
                    document.uri
                );
            }
        )
    );


    // Validate currently open file.
    if (vscode.window.activeTextEditor) {

        validateDocument(
            vscode.window.activeTextEditor.document
        );
    }
}


// ================================================================
// DEACTIVATE
// ================================================================

function deactivate() {}


module.exports = {
    activate,
    deactivate
};