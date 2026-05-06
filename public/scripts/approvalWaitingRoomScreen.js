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

            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",

            "=", "-", "#", "^", "&", "*", "<", ">", "+", "~"

        ]

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
                                        margin:0px auto;
                                        display:block;
                                        text-align:left;
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



















// FUNCTIONS ====================================================== //
// ================================================================ //

    // FUNCTIONS FOR INPUT FIELDS CONTROL ========================= //
    // ============================================================ //

        // FOR USER NAME FUNCTIONS ================================ //
        // ======================================================== //



















// EVENTS AND ACTIONS ============================================= //
// ================================================================ //

    // EVENTS FOR INPUT FIELDS CONTROL ============================ //
    // ============================================================ //

        // EVENTS FOR USERNAME INPUT FIELD ======================== //
        // ======================================================== //



















// AUTORUN EVENTS ================================================= //
// ================================================================ //

    // CHECK PAGE LANGUAGE ======================================== //
    // ============================================================ //

    // FOCUS ON FIRST FIELD ======================================= //
    // ============================================================ //

        

    // CHECK CLICKED ON ELEMENT =================================== //
    // ============================================================ //

        document.addEventListener("click", function (element) {

            // CLASSNAME CAPTURED ================================= //
            // ==================================================== //

                var getSelectedClassName = `${element.srcElement.className}`

                console.log("BUNS: " + getSelectedClassName)
            
        })