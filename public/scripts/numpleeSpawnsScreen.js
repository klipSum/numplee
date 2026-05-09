// DECLARE VARIABLES ============================================== //
// ================================================================ //

    // COMMON EXPRESSIONS ========================================= //
    // ============================================================ //

        var numberChecker = /\d/;
        var letterCheck = /[a-zA-Z]/g;
        var specialCharCheck = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

    // NUMBER MAPPERS ============================================= //
    // ============================================================ //

        var classNumbers = [

                "One", "Two", "Three", "Four", "Five", 
                "Six", "Seven", "Eight", "Nine", "Ten",

                "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
                "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty",

                "TwentyOne", "TwentyTwo", "TwentyThree", "TwentyFour", "TwentyFive", 
                "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty",

                "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", 
                "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine", "Fourty",

                "FourtyOne", "FourtyTwo", "FourtyThree", "FourtyFour", "FourtyFive", 
                "FourtySix", "FourtySeven", "FourtyEight", "FourtyNine", "Fiftty"

            ]

        var classNumbersLimited = [

                "One", "Two", "Three", "Four", "Five", 
                "Six", "Seven", "Eight", "Nine", "Ten"

            ]

    // LETTER MAPPERS ============================================= //
    // ============================================================ //

        var codeMaps = [

            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
            "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
            "Y", "Z",

            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
            "y", "z",

            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",

            "=", "-", "#", "@", "^", "&", "*", "<", ">", "|", "+", "~"

        ]
        
        var plasmaMaps = [

            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
            "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
            "Y", "Z",

            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"

        ]

        var fusionMaps = [

            "||--", "__{;", "*&~~", "/?|+", "+^^/", "><>?|", "???+", "|!@~", "@_@+", "&&&$",

            "%%$<?", "::<!", "}{[}", "{[}]", "|:><@", "^!!~", "`~@/", "|||;", "&%~;", "*!~+!",
            
            ">>>^", "^(*/", "??::", "::;:", ":***", "*~``", "%%%:", "%()_", "____", "__!`",
            
            "```#", "#@@.", "...<", "::|_", "|-__", "///?", "//**", "*#@@", "&^^^", "($##",
            
            "**|*", "^#~`", "<|/?", "><<>", "<<>>", "''``", "${{}", "*()*", "*^^*", ">**<",
            
            "&??>", "/[]_", "[(!!", "!|!|", "|**|", "?_--", "*~_%", "^^..", "??*@", "^^^%"

        ]

    // MASH POTATOES ============================================== //
    // ============================================================ //
        
        var bowlChips = []
        var bowlCompile = ``

    // FOR NAV BAR CONTROLS ======================================= //
    // ============================================================ //

        // FOR FORMS AND GHOSTS STYLING =========================== //
        // ======================================================== //

            // GENERAL FORM STYLE CONTROL ========================= //
            // ==================================================== //

                var formGeneralStyling = `
                
                    width:100%;
                    position:relative;
                    transition:all 400ms ease;
                    -o-transition:all 400ms ease;
                    -ms-transition:all 400ms ease;
                    -moz-transition:all 400ms ease;
                    -webkit-transition:all 400ms ease;

                `

                    // FOR FIELDS ================================= //
                    // ============================================ //

                        // PRIMARY FIELD ========================== //
                        // ======================================== //

                            var formFieldStarterMainContainer = `
                            
                                width:100%;
                                position:relative;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `

                                var formFieldStarterContentResizer = `
                                
                                    width:100%;
                                    z-index:2;
                                    padding:10px 0px;
                                    position:relative;
                                    background:#FFFFFF;
                                    box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                                    border-radius:8px;
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 400ms ease;

                                `

                                    var formFieldStarterInputTextBlock = `
                                    
                                        width:90%;
                                        color:#2c2c2c;
                                        border:0px solid rgba(0,0,0,0);
                                        outline:none;
                                        padding:10px 0px;
                                        position:relative;
                                        font-size:15px;
                                        text-align:center;
                                        background:rgba(0,0,0,0);
                                        letter-spacing:1px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                        // SECONDARY FIELDS ======================= //
                        // ======================================== //

                            var formFieldSecondariesMainContainer = `
                            
                                width:100%;
                                opacity:1;
                                margin:20px 0px 0px 0px;
                                display:block;
                                position:relative;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `

                                var formFieldSecondariesContentResizer = `
                                
                                    width:100%;
                                    z-index:1;
                                    padding:10px 0px;
                                    position:relative;
                                    background:#FFFFFF;
                                    box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                                    border-radius:8px;
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 400ms ease;

                                `

                                    var formFieldSecondariesInputTextBlock = `
                                    
                                        width:90%;
                                        color:#2c2c2c;
                                        border:0px solid rgba(0,0,0,0);
                                        outline:none;
                                        padding:10px 0px;
                                        position:relative;
                                        font-size:15px;
                                        text-align:center;
                                        background:rgba(0,0,0,0);
                                        letter-spacing:1px;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                    // FOR BUTTONS ================================ //
                    // ============================================ //

                        var formSubmissionButtonMain = `
                        
                            width:100%;
                            height:58px;
                            margin:20px 0px 0px 0px;
                            opacity:1;
                            display:block;
                            position:relative;
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 400ms ease;

                        `

                            var formSubmissionButtonActual = `
                            
                                width:100%;
                                height:100%;
                                left:0;
                                right:0;
                                color:#FFFFFF;
                                cursor:pointer;
                                margin:0px auto;
                                border:0px solid rgba(0,0,0,0);
                                z-index:0;
                                outline:none;
                                display:block;
                                padding:20px 0px;
                                position:absolute;
                                font-size:15px;
                                background:#34694F;
                                box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                                border-radius:8px;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `





    // BODY CONTENT STYLING STRINGS =============================== //
    // ============================================================ //

        // FOR GENERAL STYLINGS =================================== //
        // ======================================================== //

            // GENERAL PADDING MODES ============================== //
            // ==================================================== //

                var testPaddingMode = `20px 0px`
                var standardPadding = `0px 0px`
                var variablesPadding = `0px 0px 20px 0px`

                    // PADDING STRING BUILDS ====================== //
                    // ============================================ //

                        var testPaddingBuild = `${testPaddingMode}`
                        var standardPaddingBuild = `${standardPadding}`
                        var variablePaddingBuild = `${variablesPadding}`

            // GENERAL ON AND OFF DISPLAY MODES =================== //
            // ==================================================== //

                var generalOnDisplayMode = `block`
                var generalOffDisplayMode = `none`

            // GENERAL ON AND OFF DISPLAY MODES FOR INLINE BUTTONS  //
            // ==================================================== //

                var generalOnInlineDisplayMode = `inline-table`
                var generalOffInlineDisplayMode = `none`

        // FOR NAV BAR STYLINGS =================================== //
        // ======================================================== //

        // FOR INPUT FIELDS STYLINGS ============================== //
        // ======================================================== //

            // FADE IN OUT MAKE LIVE AND KILL STYLES ============== //
            // ==================================================== //

                // FADE OUT FADE IN STYLES ======================== //
                // ================================================ //

                    var fadeOutInputElement = `
                    
                        width:100%;
                        opacity:0;
                        margin:0px 0px 0px 0px;
                        display:block;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                    var fadeInInputElement = `
                    
                        width:100%;
                        opacity:1;
                        margin:20px 0px 0px 0px;
                        display:block;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                        // FADE OUT FADE IN NOTICE BOARDS ========= //
                        // ======================================== //

                            var fadeOutNoticeBoardElement = `
                            
                                width:100%;
                                margin:0px 0px 0px 0px;
                                opacity:0;
                                display:${generalOnDisplayMode};
                                position:relative;
                                background:#FFF6CB;
                                border-radius:8px;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `

                            var fadeInNoticeBoardElement = `
                            
                                width:100%;
                                margin:20px 0px 0px 0px;
                                opacity:1;
                                display:${generalOnDisplayMode};
                                position:relative;
                                background:#FFF6CB;
                                border-radius:8px;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `

                // MAKE LIVE KILL ELEMENT STYLES ================== //
                // ================================================ //

                    var killInputElement = `
                    
                        width:100%;
                        opacity:0;
                        margin:0px 0px 0px 0px;
                        display:none;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                    var makeLiveInputElement = `
                    
                        width:100%;
                        opacity:0;
                        margin:0px 0px 0px 0px;
                        display:block;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                        // MAKE LIVE KILL NOTICE BOARDS =========== //
                        // ======================================== //

                            var killNoticeBoardElement = `
                            
                                width:100%;
                                margin:0px 0px 0px 0px;
                                opacity:0;
                                display:${generalOffDisplayMode};
                                position:relative;
                                background:#FFF6CB;
                                border-radius:8px;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `

                            var makeLiveNoticeBoardElement = `
                            
                                width:100%;
                                margin:0px 0px 0px 0px;
                                opacity:0;
                                display:${generalOnDisplayMode};
                                position:relative;
                                background:#FFF6CB;
                                border-radius:8px;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `



        // FOR SUBMISSION BUTTONS STYLINGS ======================== //
        // ======================================================== //

            // FADE IN OUT MAKE LIVE AND KILL STYLES ============== //
            // ==================================================== //

                // FADE OUT FADE IN STYLES ======================== //
                // ================================================ //

                    var fadeOutButtonElement = `
                    
                        width:100%;
                        height:58px;
                        margin:0px 0px 0px 0px;
                        opacity:0;
                        display:block;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                    var fadeInButtonElement = `
                    
                        width:100%;
                        height:58px;
                        margin:20px 0px 0px 0px;
                        opacity:1;
                        display:block;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                // MAKE LIVE KILL ELEMENT STYLES ================== //
                // ================================================ //

                    var killButtonElement = `
                    
                        width:100%;
                        height:58px;
                        margin:0px 0px 0px 0px;
                        opacity:0;
                        display:none;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                    var makeLiveButtonElement = `
                    
                        width:100%;
                        height:58px;
                        margin:0px 0px 0px 0px;
                        opacity:0;
                        display:block;
                        position:relative;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

        // FOR GHOST BODIES STYLINGS ============================== //
        // ======================================================== //

            // FOR GHOST CLICKERS STYLINGS ======================== //
            // ==================================================== //

                // GHOST CLICKER ON MODE STYLINGS ================= //
                // ================================================ //

                    var ghostClickerOnMode = `
                    
                        width:100%;
                        height:100%;
                        cursor:pointer;
                        display:${generalOnDisplayMode};
                        position:absolute;
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                // GHOST CLICKER OFF MODE STYLINGS ================ //
                // ================================================ //

                    var ghostClickerOffMode = `
                    
                        width:100%;
                        height:100%;
                        cursor:pointer;
                        display:${generalOffDisplayMode};
                        position:absolute;
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

            // FOR GHOST CLICKER LINES STYLINGS =================== //
            // ==================================================== //

                // GHOST CLICKER LINES OPEN MODE STYLINGS ========= //
                // ================================================ //

                    var ghostClickerLineOneOpennedMode = `
                    
                        width:10px;
                        height:3px;
                        top:0;
                        left:-5px;
                        right:0;
                        bottom:0;
                        margin:auto;
                        position:absolute;
                        background:#FFFFFF;
                        border-radius:1000px;
                        transform:rotateZ(-45deg);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                    var ghostClickerLineTwoOpennedMode = `
                    
                        width:10px;
                        height:3px;
                        top:0;
                        left:0;
                        right:-5px;
                        bottom:0;
                        margin:auto;
                        position:absolute;
                        background:#FFFFFF;
                        border-radius:1000px;
                        transform:rotateZ(45deg);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                // GHOST CLICKER LINES OPEN MODE STYLINGS ========= //
                // ================================================ //

                    var ghostClickerLineOneClosedMode = `
                    
                        width:10px;
                        height:3px;
                        top:0;
                        left:-5px;
                        right:0;
                        bottom:0;
                        margin:auto;
                        position:absolute;
                        background:#FFFFFF;
                        border-radius:1000px;
                        transform:rotateZ(45deg);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                    var ghostClickerLineTwoClosedMode = `
                    
                        width:10px;
                        height:3px;
                        top:0;
                        left:0;
                        right:-5px;
                        bottom:0;
                        margin:auto;
                        position:absolute;
                        background:#FFFFFF;
                        border-radius:1000px;
                        transform:rotateZ(-45deg);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

            // FOR GHOST BODY STYLINGS ============================ //
            // ==================================================== //

                // GHOST BODY ON MODE STYLINGS ==================== //
                // ================================================ //

                    var ghostBodyOnMode = `
                    
                        width:100%;
                        opacity:0;
                        margin:-10px 0px 0px 0px;
                        display:${generalOnInlineDisplayMode};
                        padding:${variablePaddingBuild};
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                        var ghostBodyOnModeFadeIn = `
                        
                            width:100%;
                            opacity:1;
                            margin:0px 0px 0px 0px;
                            display:${generalOnInlineDisplayMode};
                            padding:${variablePaddingBuild};
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 400ms ease;

                        `

                // GHOST BODY OFF MODE STYLINGS =================== //
                // ================================================ //

                    var ghostBodyOffMode = `
                    
                        width:100%;
                        opacity:0;
                        margin:-10px 0px 0px 0px;
                        display:${generalOffInlineDisplayMode};
                        padding:${variablePaddingBuild};
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                        var ghostBodyOffModeFadeOut = `
                        
                            width:100%;
                            opacity:0;
                            margin:-10px 0px 0px 0px;
                            display:${generalOnInlineDisplayMode};
                            padding:${variablePaddingBuild};
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 400ms ease;

                        `



        // FOR RECYCLING STYLINGS ================================= //
        // ======================================================== //

            // SPAWNED RECYCLED GHOSTS ============================ //
            // ==================================================== //

                // FIELDS CONTAINERS ============================== //
                // ================================================ //

                    // SHOW MODES ================================= //
                    // ============================================ //

                        var resposibleRecycledMainFieldShowStyles = `
                        
                            width:100%;
                            margin:10px 0px 0px 0px;
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 400ms ease;

                        `

                    // HIDE MODES ================================= //
                    // ============================================ //

                        var resposibleRecycledMainFieldHideStyles = `
                        
                            width:100%;
                            display:none;
                            margin:10px 0px 0px 0px;
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 400ms ease;

                        `

                            // GENERAL AFTER FIELDS =============== //
                            // ==================================== //

                                var resposibleRecycledFieldElementStyles = `
                                
                                    width:100%;
                                    padding:15px 0px;
                                    background:#F3F5F4;
                                    box-shadow:0px 20px 30px -10px rgba(0, 0, 0, 0.3);
                                    border-radius:10px;
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 400ms ease;

                                `

                                    var resposibleRecycledFieldtextActualStyles = `
                                    
                                        width:80%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        bottom:0;
                                        cursor:default;
                                        margin:0px auto;
                                        opacity:0;
                                        display:block;
                                        overflow:hidden;
                                        text-align:left;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                                    var resposibleRecycledFieldAlttextActualStyles = `
                                    
                                        width:80%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        bottom:0;
                                        cursor:default;
                                        margin:0px auto;
                                        opacity:1;
                                        display:block;
                                        overflow:hidden;
                                        text-align:left;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `






        // FOR NOTIFICATION AND ERROR HANDLING STYLING ============ //
        // ======================================================== //

            // FADE IN OUT MAKE LIVE AND KILL STYLES ============== //
            // ==================================================== //

                // FADE OUT FADE IN STYLES ======================== //
                // ================================================ //

                    var fadeOutNotificationElement = `
                    
                        width:100%;
                        margin:0px 0px 0px 0px;
                        display:block;
                        opacity:0;
                        padding:10px 0px;
                        background:#fdaaaa;
                        border-radius:10px;
                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                    var fadeInNotificationElement = `
                    
                        width:100%;
                        margin:30px 0px 0px 0px;
                        display:block;
                        opacity:1;
                        padding:10px 0px;
                        background:#fdaaaa;
                        border-radius:10px;
                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                // MAKE LIVE KILL ELEMENT STYLES ================== //
                // ================================================ //

                    var killNotificationElement = `
                    
                        width:100%;
                        margin:0px 0px 0px 0px;
                        display:none;
                        opacity:0;
                        padding:10px 0px;
                        background:#fdaaaa;
                        border-radius:10px;
                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                    var makeLiveNotificationElement = `
                    
                        width:100%;
                        margin:0px 0px 0px 0px;
                        display:block;
                        opacity:0;
                        padding:10px 0px;
                        background:#fdaaaa;
                        border-radius:10px;
                        box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `





    // FOR VALUE AND CAPTURE STRINGS ============================== //
    // ============================================================ //

        // FOR FORM INFORMATION CAPTURE STRINGS =================== //
        // ======================================================== //

            var userNameHold = "---"
            var emailHold = "---"
            var specCodeHold = "---"

                var specDoorUpHold = "---"




    // FOR INPUTS ================================================= //
    // ============================================================ //

        // NOTIFICATIONS AND ERRORS ELEMENTS GATHER =============== //
        // ======================================================== //

            var getNotificationsMainContainer = document.querySelector(`.intakeScreenNotificationBoxContainer`)

                var getNotificationsTextBlockActual = document.querySelector(`.notificationsText`)






    // FOR GHOSTS ================================================= //
    // ============================================================ //

        // FOR GHOST BODIES ======================================= //
        // ======================================================== //

            // SPAWNED GHOSTS ===================================== //
            // ==================================================== //

                // CLICKERS ======================================= //
                // ================================================ //

                    var getSpawnedGhostOpenClicker = document.querySelector(`.spawnedGhostsDropDownButtonClickerOn`)
                    var getSpawnedGhostCloseClicker = document.querySelector(`.spawnedGhostsDropDownButtonClickerOff`)

                    var getSpawnedGhostIconLineOne = document.querySelector(`.spawnedGhostsDropDownButtonIconLineOne`)
                    var getSpawnedGhostIconLineTwo = document.querySelector(`.spawnedGhostsDropDownButtonIconLineTwo`)

                // ICON LINES ===================================== //
                // ================================================ //

                // BODY CONTAINER ================================= //
                // ================================================ //

                    var getSpawnedGhostBodyContainer = document.querySelector(`.spawnedGhostContentCardsContainer`)


        // FOR GHOST SHELLS ======================================= //
        // ======================================================== //

            var getGhost = document.querySelector(`.subzeroControlContainer`)






    // FOR RESPONSIBLE RECYCLING ================================== //
    // ============================================================ //

        // FOR SPAWNED RESPONSIBLE RECYCLING ====================== //
        // ======================================================== //

            // CATCH SPAWNED SOULS ================================ //
            // ==================================================== //

                var getRecyclingSpawnBin = document.querySelector(`.recallSpawnsMainCardsContainer`)

                    var getRecyclingSpawnBinCount = getRecyclingSpawnBin.children.length



















// FUNCTIONS ====================================================== //
// ================================================================ //






    // FUNCTIONS FOR GHOST BODIES CONTROL ========================= //
    // ============================================================ //

        // GHOST CREATION FUNCTION ================================ //
        // ======================================================== //
            
            function ghostFunction () {

                // VARIABLES FOR USE IN FUNCTION ================== //
                // ================================================ //

                    // STRING VARIABLES =========================== //
                    // ============================================ //

                        // MONTH MAPPING ARRAY ==================== //
                        // ======================================== //

                            var monMap = [

                                "JAN",
                                "FEB",
                                "MAR",
                                "APR",
                                "MAY",

                                "JUN",
                                "JUL",
                                "AUG",
                                "SEP",
                                "OCT",

                                "NOV",
                                "DEC"

                            ]

                        // HOUR MAPPING ARRAY ===================== //
                        // ======================================== //

                            var hourMap = [

                                "00",
                                "01",
                                "02",
                                "03",
                                "04",

                                "05",
                                "06",
                                "07",
                                "08",
                                "09",

                                "10",
                                "11",
                                "12",
                                "13",
                                "14",

                                "15",
                                "16",
                                "17",
                                "18",
                                "19",

                                "20",
                                "21",
                                "22",
                                "23"

                            ]

                        // DATE AND TIME RETRIEVE ================= //
                        // ======================================== //

                            // GENERAL DATE BUILD STRING ========== //
                            // ==================================== //

                                var dateMainString = new Date()

                                    // DATE CREATION ============== //
                                    // ============================ //

                                        // FOR DAY STRING ========= //
                                        // ======================== //

                                            var getDate = dateMainString.getDate()

                                        // FOR MONTH STRING ======= //
                                        // ======================== //

                                            var getMonth = dateMainString.getMonth()

                                                var mapMonth = `${monMap[getMonth]}`

                                        // FOR YEAR STRING ======== //
                                        // ======================== //

                                            var getYear = dateMainString.getFullYear()

                                        // FOR DATE GATHER ======== //
                                        // ======================== //

                                            var dateConsolidatedString = `${getDate} ${mapMonth} ${getYear}`


                                    // TIME CREATION ============== //
                                    // ============================ //

                                        // FOR HOURS ============== //
                                        // ======================== //

                                            var getHour = dateMainString.getHours()

                                                var mapHour = `${hourMap[getHour]}`

                                        // FOR MINUTES ============ //
                                        // ======================== //

                                            var getMinute = dateMainString.getMinutes()

                                        // FOR TIME GATHER ======== //
                                        // ======================== //

                                            var timeConsolidatedString = `${mapHour} : ${getMinute}`

                    // ELEMENT VARIABLES ========================== //
                    // ============================================ //

                    // CREATION VARIABLES ========================= //
                    // ============================================ //

                        // CREATE ================================= //
                        // ======================================== //

                            var ghostShell = document.createElement(`form`)

                                // SHELL NAME ===================== //
                                // ================================ //

                                    var shellNameMain = document.createElement(`div`)

                                        var shellNameResizer = document.createElement(`div`)

                                            var shellNameInput = document.createElement(`input`)

                                // SHELL MAIL ===================== //
                                // ================================ //

                                    var shellMailMain = document.createElement(`div`)

                                        var shellMailResizer = document.createElement(`div`)

                                            var shellMailInput = document.createElement(`input`)

                                // SHELL CODE ===================== //
                                // ================================ //

                                    var shellCodeMain = document.createElement(`div`)

                                        var shellCodeResizer = document.createElement(`div`)

                                            var shellCodeInput = document.createElement(`input`)

                                // SHELL DATE ===================== //
                                // ================================ //

                                    var shellDateMain = document.createElement(`div`)

                                        var shellDateResizer = document.createElement(`div`)

                                            var shellDateInput = document.createElement(`input`)

                                // SHELL TIME ===================== //
                                // ================================ //

                                    var shellTimeMain = document.createElement(`div`)

                                        var shellTimeResizer = document.createElement(`div`)

                                            var shellTimeInput = document.createElement(`input`)

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    var shellButtonMain = document.createElement(`div`)

                                        var shellButtonActual = document.createElement(`button`)

                        // CLASSIFICATION ========================= //
                        // ======================================== //

                            ghostShell.className = `subzeroBoxContentFormContainer`

                                // SHELL NAME ===================== //
                                // ================================ //

                                    shellNameMain.className = `subzeroUserNameIntakeContainer`

                                        shellNameResizer.className = `subzeroUserNameIntakeElement`

                                            shellNameInput.className = `subzeroUserNameIntakeActual`

                                // SHELL MAIL ===================== //
                                // ================================ //

                                    shellMailMain.className = `subzeroUserEmailSelectIntakeContainer`

                                        shellMailResizer.className = `subzeroUserEmailSelectIntakeElement`

                                            shellMailInput.className = `subzeroUserEmailSelectIntakeActual`

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeMain.className = `subzeroUserCodeIntakeContainer`

                                        shellCodeResizer.className = `subzeroUserCodeIntakeElement`

                                            shellCodeInput.className = `subzeroUserCodeIntakeActual`

                                // SHELL DATE ===================== //
                                // ================================ //

                                    shellDateMain.className = `subzeroTypeDateIntakeContainer`

                                        shellDateResizer.className = `subzeroTypeDateIntakeElement`

                                            shellDateInput.className = `subzeroTypeDateIntakeActual`

                                // SHELL TIME ===================== //
                                // ================================ //

                                    shellTimeMain.className = `subzeroTypeTimeIntakeContainer`

                                        shellTimeResizer.className = `subzeroTypeTimeIntakeElement`

                                            shellTimeInput.className = `subzeroTypeTimeIntakeActual`

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    shellButtonMain.className = `subzeroSubmissionButtonContainer`

                                        shellButtonActual.className = `subzeroSubmissionButtonActual`

                        // STYLE ================================== //
                        // ======================================== //

                            ghostShell.style = `
                            
                                ${formGeneralStyling}

                            `

                                // SHELL NAME ===================== //
                                // ================================ //

                                    shellNameMain.style = `
                                    
                                        ${formFieldStarterMainContainer}

                                    `

                                        shellNameResizer.style = `
                                        
                                            ${formFieldStarterContentResizer}

                                        `

                                            shellNameInput.style = `
                                            
                                                ${formFieldStarterInputTextBlock}

                                            `

                                // SHELL MAIL ===================== //
                                // ================================ //

                                    shellMailMain.style = `
                                    
                                        ${formFieldSecondariesMainContainer}

                                    `

                                        shellMailResizer.style = `
                                        
                                            ${formFieldSecondariesContentResizer}

                                        `

                                            shellMailInput.style = `
                                            
                                                ${formFieldSecondariesInputTextBlock}

                                            `

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeMain.style = `
                                    
                                        ${formFieldSecondariesMainContainer}

                                    `

                                        shellCodeResizer.style = `
                                        
                                            ${formFieldSecondariesContentResizer}

                                        `

                                            shellCodeInput.style = `
                                            
                                                ${formFieldSecondariesInputTextBlock}

                                            `

                                // SHELL DATE ===================== //
                                // ================================ //

                                    shellDateMain.style = `
                                    
                                        ${formFieldSecondariesMainContainer}

                                    `

                                        shellDateResizer.style = `
                                        
                                            ${formFieldSecondariesContentResizer}

                                        `

                                            shellDateInput.style = `
                                            
                                                ${formFieldSecondariesInputTextBlock}

                                            `

                                // SHELL TIME ===================== //
                                // ================================ //

                                    shellTimeMain.style = `
                                    
                                        ${formFieldSecondariesMainContainer}

                                    `

                                        shellTimeResizer.style = `
                                        
                                            ${formFieldSecondariesContentResizer}

                                        `

                                            shellTimeInput.style = `
                                            
                                                ${formFieldSecondariesInputTextBlock}

                                            `

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    shellButtonMain.style = `
                                    
                                        ${formSubmissionButtonMain}

                                    `

                                        shellButtonActual.style = `
                                        
                                            ${formSubmissionButtonActual}

                                        `

                        // ATTRIBUTES ============================= //
                        // ======================================== //

                            ghostShell.setAttribute("method", "post")
                            ghostShell.setAttribute("action", "/spawn")

                                // SHELL NAME ===================== //
                                // ================================ //

                                    shellNameInput.setAttribute("id", "ghostNameIntake")
                                    shellNameInput.setAttribute("name", "ghostNameIntake")
                                    shellNameInput.setAttribute("type", "text")
                                    shellNameInput.setAttribute("readonly", true)

                                // SHELL MAIL ===================== //
                                // ================================ //

                                    shellMailInput.setAttribute("id", "ghostEmailIntake")
                                    shellMailInput.setAttribute("name", "ghostEmailIntake")
                                    shellMailInput.setAttribute("type", "text")
                                    shellMailInput.setAttribute("readonly", true)

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeInput.setAttribute("id", "ghostCodeIntake")
                                    shellCodeInput.setAttribute("name", "ghostCodeIntake")
                                    shellCodeInput.setAttribute("type", "text")
                                    shellCodeInput.setAttribute("readonly", true)

                                // SHELL DATE ===================== //
                                // ================================ //

                                    shellDateInput.setAttribute("id", "dateIntake")
                                    shellDateInput.setAttribute("name", "dateIntake")
                                    shellDateInput.setAttribute("type", "text")
                                    shellDateInput.setAttribute("readonly", true)

                                // SHELL TIME ===================== //
                                // ================================ //

                                    shellTimeInput.setAttribute("id", "timeIntake")
                                    shellTimeInput.setAttribute("name", "timeIntake")
                                    shellTimeInput.setAttribute("type", "text")
                                    shellTimeInput.setAttribute("readonly", true)

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    shellButtonActual.setAttribute("type", "register user")

                        // TEXT INPUTS ============================ //
                        // ======================================== //

                                // SHELL NAME ===================== //
                                // ================================ //

                                    shellNameInput.value = `${String(thing.value).toUpperCase()}`

                                // SHELL MAIL ===================== //
                                // ================================ //

                                    shellMailInput.value = `${String(thing.value).toUpperCase()}`

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeInput.value = `${String(thing.replaceAll(" ","")).toUpperCase()}`

                                // SHELL DATE ===================== //
                                // ================================ //

                                    shellDateInput.value = `${String(dateConsolidatedString).toUpperCase()}`

                                // SHELL TIME ===================== //
                                // ================================ //

                                    shellTimeInput.value = `${String(timeConsolidatedString).toUpperCase()}`

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    shellButtonActual.value = `activate user`
                                    shellButtonActual.textContent = `activate user`

                        // APPEND ================================= //
                        // ======================================== //

                            getGhost.appendChild(ghostShell)

                                // SHELL NAME ===================== //
                                // ================================ //

                                    ghostShell.appendChild(shellNameMain)

                                        shellNameMain.appendChild(shellNameResizer)

                                            shellNameResizer.appendChild(shellNameInput)

                                // SHELL MAIL ===================== //
                                // ================================ //

                                    ghostShell.appendChild(shellMailMain)

                                        shellMailMain.appendChild(shellMailResizer)

                                            shellMailResizer.appendChild(shellMailInput)

                                // SHELL CODE ===================== //
                                // ================================ //

                                    ghostShell.appendChild(shellCodeMain)

                                        shellCodeMain.appendChild(shellCodeResizer)

                                            shellCodeResizer.appendChild(shellCodeInput)

                                // SHELL DATE ===================== //
                                // ================================ //

                                    ghostShell.appendChild(shellDateMain)

                                        shellDateMain.appendChild(shellDateResizer)

                                            shellDateResizer.appendChild(shellDateInput)

                                // SHELL TIME ===================== //
                                // ================================ //

                                    ghostShell.appendChild(shellTimeMain)

                                        shellTimeMain.appendChild(shellTimeResizer)

                                            shellTimeResizer.appendChild(shellTimeInput)

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    ghostShell.appendChild(shellButtonMain)

                                        shellButtonMain.appendChild(shellButtonActual)

                // EVENTS FOR USE IN FUNCTION ===================== //
                // ================================================ //

                    // SUBMIT BUTTON ============================== //
                    // ============================================ //

                        setTimeout(() => {

                            shellButtonActual.click()

                            console.log("activated")

                        }, 100)

            }


            

        // FOR NOTIFICATIONS AND ERROR HANDLING FUNCTIONS ========= //
        // ======================================================== //

            function notificationsAndErrorsHandlingFunction () {

                // CHECK IF NOTIFICATION OR ERROR STRING EXISTS OR NOT //
                // =================================================== //

                    // IF DOES NOT EXIST THEN KEEP POP UP HIDDEN ===== //
                    // =============================================== //

                        if ( getNotificationsTextBlockActual.value == "" || getNotificationsTextBlockActual.value == `` ) {

                            console.log("NO NOTIFICATION...")

                        }

                    // IF EXISTS THEN BRING UP POP UP ================ //
                    // =============================================== //

                        else {

                            console.log("PULLING UP NOTIFICATION...")

                            // PULL UP NOTIFICATON MODE ============== //
                            // ======================================= //

                                // MAKE POP UP LIVE ================== //
                                // =================================== //

                                    getNotificationsMainContainer.style = `
                                    
                                        ${makeLiveNotificationElement}

                                    `

                                        // THEN FADE IN POP UP ======= //
                                        // =========================== //

                                            setTimeout(() => {

                                                getNotificationsMainContainer.style = `
                                    
                                                    ${fadeInNotificationElement}

                                                `

                                            }, 50)


                            // THEN LATER, HIDE NOTIFICATION MODE ==== //
                            // ======================================= //

                                setTimeout(() => {

                                    
                                    // FADE OUT POP UP =============== //
                                    // =============================== //

                                        getNotificationsMainContainer.style = `
                                    
                                            ${fadeOutNotificationElement}

                                        `

                                            // THEN KILL POP UP ====== //
                                            // ======================= //

                                                setTimeout(() => {

                                                    getNotificationsMainContainer.style = `
                                        
                                                        ${killNotificationElement}

                                                    `

                                                }, 300)


                                }, 2000)

                        }

            }






    // FUNCTIONS FOR MASHED POTATOES CONTROL ====================== //
    // ============================================================ //

        // POTATO MASH CREATION FUNCTION ========================== //
        // ======================================================== //

            function mashedPotatoesFunction () {

                // GET POTATO ===================================== //
                // ================================================ //

                    var getPotato = document.querySelector(`.recalledSpawnedContentCardOneContentResizer`).children[3].children[0].children[0].textContent

                // PEEL WASH CHIP AND BOWL POTATO ================= //
                // ================================================ //

                    var peelWashAndChipPotato = getPotato.replaceAll("", "0")

                        // RUN LOOP FOR CLEANING AND BOWLING ====== //
                        // ======================================== //

                            for ( cleanPotatoCount =  0;  cleanPotatoCount < peelWashAndChipPotato.split("").length; cleanPotatoCount++) {

                                // IF BAD POTATO ================== //
                                // ================================ //

                                    if ( 
                                        
                                            peelWashAndChipPotato.split("")[cleanPotatoCount] == 0 ||
                                            peelWashAndChipPotato.split("")[cleanPotatoCount] == "0"
                                        
                                        ) 
                                        
                                    {

                                    }

                                // IF GOOD POTATO ================= //
                                // ================================ //

                                    else {

                                        bowlChips.push(peelWashAndChipPotato.split("")[cleanPotatoCount])

                                    }


                            }

                // MASH POTATO ==================================== //
                // ================================================ //

                    console.log("BOWL:" + bowlChips)



            }






    // FUNCTIONS FOR MASH PASS ==================================== //
    // ============================================================ //

        // POTATO MASH PASSOVER FUNCTION ========================== //
        // ======================================================== //

            function mashPotatoPassoverFunction (status, gName, gEmail, gDoor) {

                // CLEAR OUT PASSOVER BOWL ======================== //
                // ================================================ //

                    bowlCompile = ``

                // RUN LOOP FOR COMPILER ========================== //
                // ================================================ //

                    for ( potatoMashScoopCount = 0; potatoMashScoopCount< bowlChips.length; potatoMashScoopCount++ ) {

                        bowlCompile += bowlChips[potatoMashScoopCount]

                    }

                    console.log("MASH SCOOPS:" + bowlCompile)

                // POPULATE ITEMS FOR PASSOVER ==================== //
                // ================================================ //

                    var status = ``
                    var ghostName = ``
                    var ghostEmail = ``
                    var ghostDoor = `${bowlCompile}`

                
            }






    // FUNCTIONS FOR RECYCLING CONTROL ============================ //
    // ============================================================ //

        // RECYCLE RESPONSIBLY FUNCTION =========================== //
        // ======================================================== //

            function spawnedRecyclesFunction () {

                // RUN LOOP TO GO THROUGH COLLECTED SPAWNED SOULS = //
                // ================================================ //

                    for ( soulsCount = 0; soulsCount < getRecyclingSpawnBinCount; soulsCount++ ) {

                        // FIRST CREATE NEW CARD FOR SOUL ========= //
                        // ======================================== //

                            createNewRecycledSpawnedSoulCardFunction(soulsCount)

                        // THEN REMOVE COLLECTED SOULS ============ //
                        // ======================================== //

                            eraseOldSpawnedSoulsFunction()

                    }

            }




                // CREATE NEW SOUL CARD FUNCTION ================== //
                // ================================================ //

                    function createNewRecycledSpawnedSoulCardFunction (cardNumber) {

                        // VARIABLES FOR INTAKE MODE ============== //
                        // ======================================== //

                            var getSoulStatusText = getRecyclingSpawnBin.children[0].children[0].children[0].children[0].children[0].children[0].textContent.replaceAll(" ", "")

                            var getSoulNameText = getRecyclingSpawnBin.children[0].children[0].children[0].children[1].children[0].children[0].textContent.replaceAll(" ", "")

                            var getSoulEmailText = getRecyclingSpawnBin.children[0].children[0].children[0].children[2].children[0].children[0].textContent.replaceAll(" ", "")

                            var getSoulDoorText = getRecyclingSpawnBin.children[0].children[0].children[0].children[3].children[0].children[0].textContent.replaceAll(" ", "")

                        // CREATION OF ELEMENTS =================== //
                        // ======================================== //

                            var createCardMainContainer = document.createElement(`div`)

                                var createCardElementContainer = document.createElement(`div`)

                                    var createCardContentResizerContainer = document.createElement(`div`)

                                        // PENDING INDICATOR CONTAINER //
                                        // =========================== //

                                            var createCardStatusIndicatorContainer = document.createElement(`div`)

                                                var createCardStatusIndicatorElementContainer = document.createElement(`div`)

                                                    var createCardStatusIndicatorTextActual = document.createElement(`div`)

                                        // USER NAME CONTAINER ======= //
                                        // =========================== //

                                            var createCardSoulNameContainer = document.createElement(`div`)

                                                var createCardSoulNameElementContainer = document.createElement(`div`)

                                                    var createCardSoulNameTextActual = document.createElement(`div`)

                                        // USER EMAIL CONTAINER ====== //
                                        // =========================== //

                                            var createCardSoulEmailContainer = document.createElement(`div`)

                                                var createCardSoulEmailElementContainer = document.createElement(`div`)

                                                    var createCardSoulEmailTextActual = document.createElement(`div`)

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            var createCardSoulDoorContainer = document.createElement(`div`)

                                                var createCardSoulDoorElementContainer = document.createElement(`div`)

                                                    var createCardSoulDoorTextActual = document.createElement(`div`)

                                        // USER REVIEW BUTTON CONTAINER //
                                        // ============================ //

                                            var createCardSoulButtonContainer = document.createElement(`div`)

                                                var createCardSoulButtonElementContainer = document.createElement(`div`)




                        // NAMING OF ELEMENTS ===================== //
                        // ======================================== //

                            createCardMainContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}Container`

                                createCardElementContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}Element`

                                    createCardContentResizerContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}ContentResizer`

                                        // PENDING INDICATOR CONTAINER //
                                        // =========================== //

                                            createCardStatusIndicatorContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}IndicatorContainer`

                                                createCardStatusIndicatorElementContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}IndicatorElementContainer`

                                                    createCardStatusIndicatorTextActual.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}IndicatorElementTextActual`

                                        // USER NAME CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulNameContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserNameContainer`

                                                createCardSoulNameElementContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserNameElement`

                                                    createCardSoulNameTextActual.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserNameTextActual`

                                        // USER EMAIL CONTAINER ====== //
                                        // =========================== //

                                            createCardSoulEmailContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserEmailContainer`

                                                createCardSoulEmailElementContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserEmailElement`

                                                    createCardSoulEmailTextActual.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserEmailTextActual`

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulDoorContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserDoorContainer`

                                                createCardSoulDoorElementContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserDoorElement`

                                                    createCardSoulDoorTextActual.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserDoorTextActual`

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulButtonContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserButtonContainer`

                                                createCardSoulButtonElementContainer.className = `recalledSpawnedContentCard${classNumbers[cardNumber]}UserButtonElement`




                        // STYLING OF ELEMENTS ==================== //
                        // ======================================== //

                            createCardMainContainer.style = `
                            
                                width:100%;
                                margin:20px 0px 0px 0px;
                                position:relative;
                                transition:all 400ms ease;
                                -o-transition:all 400ms ease;
                                -ms-transition:all 400ms ease;
                                -moz-transition:all 400ms ease;
                                -webkit-transition:all 400ms ease;

                            `

                                createCardElementContainer.style = `
                                
                                    width:100%;
                                    top:0;
                                    left:0;
                                    right:0;
                                    bottom:0;
                                    margin:0px auto;
                                    padding:15px 0px;
                                    background:#FFFFFF;
                                    box-shadow:0px 30px 30px -10px rgba(0,0,0,0.3);
                                    border-radius:10px;
                                    transition:all 400ms ease;
                                    -o-transition:all 400ms ease;
                                    -ms-transition:all 400ms ease;
                                    -moz-transition:all 400ms ease;
                                    -webkit-transition:all 400ms ease;

                                `

                                    createCardContentResizerContainer.style = `
                                    
                                        width:85%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        bottom:0;
                                        margin:0px auto;
                                        display:block;
                                        position:relative;
                                        transition:all 400ms ease;
                                        -o-transition:all 400ms ease;
                                        -ms-transition:all 400ms ease;
                                        -moz-transition:all 400ms ease;
                                        -webkit-transition:all 400ms ease;

                                    `

                                        // PENDING INDICATOR CONTAINER //
                                        // =========================== //

                                            createCardStatusIndicatorContainer.style = `
                                            
                                                width:100%;
                                                transition:all 400ms ease;
                                                -o-transition:all 400ms ease;
                                                -ms-transition:all 400ms ease;
                                                -moz-transition:all 400ms ease;
                                                -webkit-transition:all 400ms ease;

                                            `

                                                createCardStatusIndicatorElementContainer.style = `
                                                
                                                    width:max-content;
                                                    padding:5px 10px;
                                                    background:#C4E7D3;
                                                    border-radius:5px;
                                                    transition:all 400ms ease;
                                                    -o-transition:all 400ms ease;
                                                    -ms-transition:all 400ms ease;
                                                    -moz-transition:all 400ms ease;
                                                    -webkit-transition:all 400ms ease;

                                                `

                                                    createCardStatusIndicatorTextActual.style = `
                                                    
                                                        width:100%;
                                                        transition:all 400ms ease;
                                                        -o-transition:all 400ms ease;
                                                        -ms-transition:all 400ms ease;
                                                        -moz-transition:all 400ms ease;
                                                        -webkit-transition:all 400ms ease;

                                                    `

                                        // USER NAME CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulNameContainer.style = `
                                            
                                                ${resposibleRecycledMainFieldShowStyles}

                                            `

                                                createCardSoulNameElementContainer.style = `
                                                
                                                    ${resposibleRecycledFieldElementStyles}

                                                `

                                                    createCardSoulNameTextActual.style = `
                                                    
                                                        ${resposibleRecycledFieldAlttextActualStyles}

                                                    `

                                        // USER EMAIL CONTAINER ====== //
                                        // =========================== //

                                            createCardSoulEmailContainer.style = `
                                            
                                                ${resposibleRecycledMainFieldHideStyles}

                                            `

                                                createCardSoulEmailElementContainer.style = `
                                                
                                                    ${resposibleRecycledFieldElementStyles}

                                                `

                                                    createCardSoulEmailTextActual.style = `
                                                    
                                                        ${resposibleRecycledFieldtextActualStyles}

                                                    `

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulDoorContainer.style = `
                                            
                                                ${resposibleRecycledMainFieldHideStyles}

                                            `

                                                createCardSoulDoorElementContainer.style = `
                                                
                                                    ${resposibleRecycledFieldElementStyles}

                                                `

                                                    createCardSoulDoorTextActual.style = `
                                                    
                                                        ${resposibleRecycledFieldtextActualStyles}

                                                    `

                                        // USER BUTTON CONTAINER ===== //
                                        // =========================== //

                                            createCardSoulButtonContainer.style = `
                                            
                                                width:100%;
                                                height:58px;
                                                margin:10px 0px 0px 0px;
                                                opacity:1;
                                                display:block;
                                                position:relative;
                                                transition:all 400ms ease;
                                                -o-transition:all 400ms ease;
                                                -ms-transition:all 400ms ease;
                                                -moz-transition:all 400ms ease;
                                                -webkit-transition:all 400ms ease;

                                            `

                                                createCardSoulButtonElementContainer.style = `
                                                
                                                    width:100%;
                                                    left:0;
                                                    right:0;
                                                    color:#FFFFFF;
                                                    cursor:pointer;
                                                    margin:0px auto;
                                                    border:0px solid rgba(0, 0, 0, 0);
                                                    z-index:0;
                                                    outline:none;
                                                    display:block;
                                                    padding:20px 0px;
                                                    position:absolute;
                                                    font-size:15px;
                                                    background:#34694F;
                                                    box-shadow:0px 30px 30px -10px rgba(0, 0, 0, 0.3);
                                                    border-radius:8px;
                                                    transition:all 400ms ease;
                                                    -o-transition:all 400ms ease;
                                                    -ms-transition:all 400ms ease;
                                                    -moz-transition:all 400ms ease;
                                                    -webkit-transition:all 400ms ease;

                                                `




                        // TEXT MAPPING OF ELEMENTS =============== //
                        // ======================================== //

                                        // PENDING INDICATOR CONTAINER //
                                        // =========================== //

                                            createCardStatusIndicatorTextActual.textContent = `${getSoulStatusText}`

                                        // USER NAME CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulNameTextActual.textContent = `${getSoulNameText}`

                                        // USER EMAIL CONTAINER ====== //
                                        // =========================== //

                                            createCardSoulEmailTextActual.textContent = `${getSoulEmailText}`

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulDoorTextActual.textContent = `${getSoulDoorText}`

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            createCardSoulButtonElementContainer.textContent = `review user`




                        // APPENDING OF ELEMENTS ================== //
                        // ======================================== //

                            getSpawnedGhostBodyContainer.appendChild(createCardMainContainer)

                                createCardMainContainer.appendChild(createCardElementContainer)

                                    createCardElementContainer.appendChild(createCardContentResizerContainer)

                                        // PENDING INDICATOR CONTAINER //
                                        // =========================== //

                                            createCardContentResizerContainer.appendChild(createCardStatusIndicatorContainer)

                                                createCardStatusIndicatorContainer.appendChild(createCardStatusIndicatorElementContainer)

                                                    createCardStatusIndicatorElementContainer.appendChild(createCardStatusIndicatorTextActual)

                                        // USER NAME CONTAINER ======= //
                                        // =========================== //

                                            createCardContentResizerContainer.appendChild(createCardSoulNameContainer)

                                                createCardSoulNameContainer.appendChild(createCardSoulNameElementContainer)

                                                    createCardSoulNameElementContainer.appendChild(createCardSoulNameTextActual)

                                        // USER EMAIL CONTAINER ====== //
                                        // =========================== //

                                            createCardContentResizerContainer.appendChild(createCardSoulEmailContainer)

                                                createCardSoulEmailContainer.appendChild(createCardSoulEmailElementContainer)

                                                    createCardSoulEmailElementContainer.appendChild(createCardSoulEmailTextActual)

                                        // USER DOOR CONTAINER ======= //
                                        // =========================== //

                                            createCardContentResizerContainer.appendChild(createCardSoulDoorContainer)

                                                createCardSoulDoorContainer.appendChild(createCardSoulDoorElementContainer)

                                                    createCardSoulDoorElementContainer.appendChild(createCardSoulDoorTextActual)

                                        // USER BUTTON CONTAINER ===== //
                                        // =========================== //

                                            createCardContentResizerContainer.appendChild(createCardSoulButtonContainer)

                                                createCardSoulButtonContainer.appendChild(createCardSoulButtonElementContainer)

                    }

            


                // ERASE OLD SPAWNED SOULS FUNCTION =============== //
                // ================================================ //

                    function eraseOldSpawnedSoulsFunction () {

                        // REMOVE OLD SOULS ======================= //
                        // ======================================== //

                            getRecyclingSpawnBin.removeChild(getRecyclingSpawnBin.children[0])

                    }




















// EVENTS AND ACTIONS ============================================= //
// ================================================================ //

    // CHECK PAGE LANGUAGE ======================================== //
    // ============================================================ //



















// AUTORUN EVENTS ================================================= //
// ================================================================ //

    // CHECK PAGE LANGUAGE ======================================== //
    // ============================================================ //

    // FOCUS ON FIRST FIELD ======================================= //
    // ============================================================ //

    // RUN RECYCLES =============================================== //
    // ============================================================ //

        spawnedRecyclesFunction()

        setTimeout(() => {

            mashedPotatoesFunction()
            mashPotatoPassoverFunction()
            
        }, 1000);

        

    // CHECK CLICKED ON ELEMENT ===================================================== //
    // ============================================================================== //

        document.addEventListener("click", function (element) {

            // CLASSNAME CAPTURED =================================================== //
            // ====================================================================== //

                var getSelectedClassName = `${element.srcElement.className}`

                console.log("BUNS: " + getSelectedClassName)

            // OTHER VARIABLES FOR USE IN EVENT ===================================== //
            // ====================================================================== //

                // FOR SPAWNED GHOSTS USABLE INTAKES ================================ //
                // ================================================================== //

                    var getIntakeGhostNumber = ``

                    var getIntakeGhostStatus = ``
                    var getIntakeGhostName = ``
                    var getIntakeGhostEmail = ``
                    var getIntakeGhostDoor = ``

            // CHECK CLASSNAME CLICKED FOR ELEMENTS ================================= //
            // ====================================================================== //

                // FOR SPAWNED GHOSTS CARDS ========================================= //
                // ================================================================== //

                    // CHECK IF CARD ELEMENT CLICKED ON ============================= //
                    // ============================================================== //

                        // IF GHOST CARD ELEMENTS SELECTED ========================== //
                        // ========================================================== //

                            if ( getSelectedClassName.includes(`recalledSpawnedContentCard`) ) {

                                // GET NUMBER THROUGH LOOP ========================== //
                                // ================================================== //

                                    for ( numberDetectCounter = 0; numberDetectCounter < classNumbersLimited.length; numberDetectCounter++ ) {

                                        // CHECK NUMBER THAT MATCHES ================ //
                                        // ========================================== //

                                            // IF NUMBER MATCHES THEN TAKE ON ======= //
                                            // ====================================== //

                                                if ( getSelectedClassName.includes(`${classNumbersLimited[numberDetectCounter]}`) ) {

                                                    // UPDATE THE PICKED NUMBER ===== //
                                                    // ============================== //

                                                        getIntakeGhostNumber = `${classNumbersLimited[numberDetectCounter]}`

                                                        console.log("NUMBER MATCH:" + classNumbersLimited[numberDetectCounter])

                                                }

                                            // IF NUMBER DOES NOT MATCH THEN SKIP === //
                                            // ====================================== //

                                                else {



                                                }

                                    }




                                // UPDATE CARD ELEMENTS FOR USE ===================== //
                                // ================================================== //

                                    getIntakeGhostStatus = document.querySelector(`.recalledSpawnedContentCard${getIntakeGhostNumber}IndicatorElementTextActual`)

                                    getIntakeGhostName = document.querySelector(`.recalledSpawnedContentCard${getIntakeGhostNumber}UserNameTextActual`)

                                    getIntakeGhostEmail = document.querySelector(`.recalledSpawnedContentCard${getIntakeGhostNumber}UserEmailTextActual`)

                                    getIntakeGhostDoor = document.querySelector(`.recalledSpawnedContentCard${getIntakeGhostNumber}UserDoorContainer`)
                                
                            }

                        // IF NOT GHOST CARD ELEMENTS SELECTED THEN SKIP ============ //
                        // ========================================================== //

                            console.log("STATUS:" + `${getIntakeGhostStatus.textContent}`)
                            console.log("NAME:" + `${getIntakeGhostName.textContent}`)
                            console.log("EMAIL:" + `${getIntakeGhostEmail.textContent}`)
                            console.log("Door:" + `${getIntakeGhostDoor.textContent}`)
            
        })