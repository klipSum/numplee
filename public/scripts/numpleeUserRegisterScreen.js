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

                var testPaddingMode = `30px 0px`
                var standardPadding = `0px 0px`
                var variablesPadding = `30px 0px`

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
                        margin:0px 0px 0px 0px;
                        display:${generalOnInlineDisplayMode};
                        padding:${variablePaddingBuild};
                        background:#2c2c2c;
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                        var ghostBodyOnModeFadeIn = `
                        
                            width:100%;
                            opacity:1;
                            margin:20px 0px 0px 0px;
                            display:${generalOnInlineDisplayMode};
                            padding:${variablePaddingBuild};
                            background:#2c2c2c;
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
                        margin:0px 0px 0px 0px;
                        display:${generalOffInlineDisplayMode};
                        padding:${variablePaddingBuild};
                        background:#2c2c2c;
                        transition:all 400ms ease;
                        -o-transition:all 400ms ease;
                        -ms-transition:all 400ms ease;
                        -moz-transition:all 400ms ease;
                        -webkit-transition:all 400ms ease;

                    `

                        var ghostBodyOffModeFadeOut = `
                        
                            width:100%;
                            opacity:0;
                            margin:0px 0px 0px 0px;
                            display:${generalOnInlineDisplayMode};
                            padding:${variablePaddingBuild};
                            background:#2c2c2c;
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




    // FOR INPUTS ================================================= //
    // ============================================================ //

        // INPUT FIELDS MAIN CONTAINERS GATHER ==================== //
        // ======================================================== //

            var userNameMainContainer = document.querySelector(`.userRegisterUsernameInputFieldContainer`)

            var userEmailMainContainer = document.querySelector(`.userRegisterEmailInputFieldContainer`)

            var userCodeMainContainer = document.querySelector(`.userRegisterSpecCodeInputFieldContainer`)

            var noticeBoardMainContainer = document.querySelector(`.userRegisterSpecCodeCopyTextInstructionsContainer`)

                // INPUT FIELDS ACTUAL GATHER ===================== //
                // ================================================ //

                    var userNameInputField = document.querySelector(`.inputScreenUsernameInputBoxActual`)

                    var userEmailInputField = document.querySelector(`.inputScreenEmailInputBoxActual`)

                    var userCodeInputField = document.querySelector(`.inputScreenSpecCodeInputBoxActual`)


        // SUBMISSION ELEMENTS GATHER ============================= //
        // ======================================================== //

            var submissionButtonMainContainer = document.querySelector(`.userRegisterSubmissionButtonContainer`)

                var submissionButtonActual = document.querySelector(`.userRegisterSubmissionButtonActual`)






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




            // ACTIVE GHOSTS ====================================== //
            // ==================================================== //

                // CLICKERS ======================================= //
                // ================================================ //

                    var getActiveGhostOpenClicker = document.querySelector(`.activeGhostsDropDownButtonClickerOn`)
                    var getActiveGhostCloseClicker = document.querySelector(`.activeGhostsDropDownButtonClickerOff`)

                    var getActiveGhostIconLineOne = document.querySelector(`.activeGhostsDropDownButtonIconLineOne`)
                    var getActiveGhostIconLineTwo = document.querySelector(`.activeGhostsDropDownButtonIconLineTwo`)

                // ICON LINES ===================================== //
                // ================================================ //

                // BODY CONTAINER ================================= //
                // ================================================ //

                    var getActiveGhostBodyContainer = document.querySelector(`.activeGhostContentCardsContainer`)


                    

            // RELEASED GHOSTS ==================================== //
            // ==================================================== //

                // CLICKERS ======================================= //
                // ================================================ //

                    var getReleasedGhostOpenClicker = document.querySelector(`.releasedGhostsDropDownButtonClickerOn`)
                    var getReleasedGhostCloseClicker = document.querySelector(`.releasedGhostsDropDownButtonClickerOff`)

                    var getReleasedGhostIconLineOne = document.querySelector(`.releasedGhostsDropDownButtonIconLineOne`)
                    var getReleasedGhostIconLineTwo = document.querySelector(`.releasedGhostsDropDownButtonIconLineTwo`)

                // ICON LINES ===================================== //
                // ================================================ //

                // BODY CONTAINER ================================= //
                // ================================================ //

                    var getReleasedGhostBodyContainer = document.querySelector(`.releasedGhostContentCardsContainer`)


        // FOR GHOST SHELLS ======================================= //
        // ======================================================== //

            var getGhost = document.querySelector(`.subzeroControlContainer`)



















// FUNCTIONS ====================================================== //
// ================================================================ //

    // FUNCTIONS FOR INPUT FIELDS CONTROL ========================= //
    // ============================================================ //

        // FOR USER NAME FUNCTIONS ================================ //
        // ======================================================== //

            function userNameFieldIntakeParamsFunction (
                
                currentField, 
                otherFieldOne, 
                otherFieldTwo, 
                fieldIntakChareNumber, 
                trueCheck, 
                falseCheck
            
            ) 
            
            {

                // IN FUNCTION SUB FUNCTIONS ====================== //
                // ================================================ //

                    // RESET FOR INVALID INPUTS FUNCTION ========== //
                    // ============================================ //

                        function invalidInputForUserNameFunction () {

                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                userNameHold = ``
                                emailHold = ``
                                specCodeHold = ``

                            // LOWERCASE FIELD ==================== //
                            // ==================================== //

                                currentField.style.textTransform = "lowercase"
                                otherFieldOne.style.textTransform = "lowercase"
                                otherFieldTwo.style.textTransform = "lowercase"

                            // CLOSE ALL OTHER FIELDS ============= //
                            // ==================================== //

                                closeAllOtherFieldsAndButtonsAfterUserNameFunction(
                                    
                                    userEmailMainContainer, 
                                    userCodeMainContainer, 
                                    noticeBoardMainContainer, 
                                    submissionButtonMainContainer
                                
                                )

                        }

                            

                            // CLOSE OTHER FIELDS AFTER USERNAME FUNCTION //
                            // ========================================== //

                                function closeAllOtherFieldsAndButtonsAfterUserNameFunction (
                                    
                                    fieldToCloseOne, 
                                    fieldToCloseTwo, 
                                    noticeBoardToCloseOne, 
                                    subButtonToCloseOne
                                
                                ) 
                                
                                {

                                    // CLEAR FIELDS ===================== //
                                    // ================================== //

                                        fieldToCloseOne.children[0].children[0].value = ``

                                        fieldToCloseTwo.children[0].children[0].value = ``

                                    // CLOSE FIELDS ===================== //
                                    // ================================== //

                                        // CHECK IF FIELDS ARE ALREADY OFF //
                                        // =============================== //

                                            // IF FIELDS ARE OFF THEN SKIP = //
                                            // ============================= //

                                                if ( fieldToCloseOne.style.display == `${generalOffDisplayMode}` ) {

                                                }

                                            // IF FIELDS ARE ON THE TURN OFF //
                                            // ============================= //

                                                else {

                                                    // CLOSE OTHER INPUT FIELDS  //
                                                    // ========================= //

                                                        // FADE OUT FIELDS ===== //
                                                        // ===================== //

                                                            fieldToCloseOne.style = `
                                                            
                                                                ${fadeOutInputElement}
                                                            
                                                            `

                                                                setTimeout(() => {

                                                                    fieldToCloseTwo.style = `
                                                                    
                                                                        ${fadeOutInputElement}
                                                                    
                                                                    `

                                                                },50)

                                                        // KILL FIELDS ========= //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                fieldToCloseOne.style = `
                                                            
                                                                    ${killInputElement}
                                                                
                                                                `

                                                            },50)

                                                            setTimeout(() => {

                                                                fieldToCloseTwo.style = `
                                                            
                                                                    ${killInputElement}
                                                                
                                                                `

                                                            },75)

                                                    // CLOSE NOTICE BOARDS ===== //
                                                    // ========================= //

                                                        // FADE OUT NOTICE BOARD //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                noticeBoardToCloseOne.style = `
                                                                
                                                                    ${fadeOutInputElement}
                                                                
                                                                `

                                                            }, 75)

                                                        // KILL NOTICE BOARD === //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                noticeBoardToCloseOne.style = `
                                                            
                                                                    ${killInputElement}
                                                                
                                                                `

                                                            },100)

                                                    // CLOSE BUTTONS =========== //
                                                    // ========================= //

                                                        // FADE OUT SUB BUTTON = //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                subButtonToCloseOne.style = `
                                                                
                                                                    ${fadeOutButtonElement}
                                                                
                                                                `
                                                                
                                                            }, 100);

                                                        // KILL SUB BUTTON ===== //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                subButtonToCloseOne.style = `
                                                            
                                                                    ${killButtonElement}
                                                                
                                                                `

                                                            },125)

                                                }

                                        

                                }



                    // APPROVE FOR VALID INPUTS FUNCTION ========== //
                    // ============================================ //

                        function validInputForUserNameFunction (currentUpdateHoldString) {

                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                currentUpdateHoldString = `${(currentField.value).toUpperCase()}`

                            // LOWERCASE FIELD ==================== //
                            // ==================================== //

                                currentField.style.textTransform = "uppercase"

                            // OPEN NEXT INPUT FIELD ============== //
                            // ==================================== //

                                openNextFieldAfterUserNameFunction(
                                    
                                    userEmailMainContainer
                                
                                )

                        }

                            

                            // OPEN NEXT FIELD AFTER USERNAME FUNCTION == //
                            // ========================================== //

                                function openNextFieldAfterUserNameFunction (

                                    nextFieldToOpen

                                ) 
                                
                                {

                                    // CLEAR FIELD FIRST ================ //
                                    // ================================== //

                                        nextFieldToOpen.children[0].children[0].value = ``

                                    // OPEN NEXT FIELD ================== //
                                    // ================================== //

                                            // IF FIELDS ARE ON THEN SKIP //
                                            // ========================== //

                                                if ( nextFieldToOpen.style.display == `${generalOnDisplayMode}` ) {

                                                }

                                            // IF FIELDS ARE OFF THE TURN ON //
                                            // ============================= //

                                                else {

                                                    // OPEN NEXT INPUT FIELD //
                                                    // ===================== //

                                                        // MAKE LIVE NEXT FIELD //
                                                        // ==================== //

                                                            nextFieldToOpen.style = `
                                                            
                                                                ${makeLiveInputElement}

                                                            `

                                                        // FADE IN NEXT FIELD = //
                                                        // ==================== //

                                                            setTimeout(() => {

                                                                nextFieldToOpen.style = `
                                                                
                                                                    ${fadeInInputElement}

                                                                `

                                                            },50)

                                                    // THEN FOCUS ON NEXT OPEN FIELD //
                                                    // ============================= //

                                                        nextFieldToOpen.children[0].children[0].focus()

                                                }

                                }




                // CHECK FIELD VALIDITY =========================== //
                // ================================================ //

                    // IF FIELD IS EMPTY ========================== //
                    // ============================================ //

                        if ( currentField.value == "" || currentField.value.length == 0 ) {
                                        
                            invalidInputForUserNameFunction()

                        }

                    // IF FIELD IS NOT EMPTY AND BELOW 6 CHARS ==== //
                    // ============================================ //

                        else if ( currentField.value.length < fieldIntakChareNumber ) {
                                        
                            invalidInputForUserNameFunction()

                        }

                    // ElSE IF FIELD IS 6 CHARS =================== //
                    // ============================================ //

                        else if ( currentField.value.length >= fieldIntakChareNumber ) {

                            // CHECK IF INCLUDES NUMBERS ========= //
                            // =================================== //

                                // IF ONLY INCLUDES NUMBERS ====== //
                                // =============================== //

                                    if ( 
                                        
                                            numberChecker.test(`${currentField.value}`) == trueCheck && 
                                            letterCheck.test(`${currentField.value}`) == falseCheck &&
                                            specialCharCheck.test(`${currentField.value}`) == falseCheck
                                        
                                        ) 
                                        
                                    {
                                        
                                        invalidInputForUserNameFunction()

                                    }

                                // IF ONLY INCLUDES SPEC CHARS === //
                                // =============================== //

                                    else if ( 
                                        
                                            numberChecker.test(`${currentField.value}`) == falseCheck && 
                                            letterCheck.test(`${currentField.value}`) == falseCheck &&
                                            specialCharCheck.test(`${currentField.value}`) == trueCheck
                                        
                                        ) 
                                        
                                    {
                                        
                                        invalidInputForUserNameFunction()

                                    }

                                // IF SPEC CHARS LETTERS AND NUMBERS COMBO //
                                // ======================================= //

                                    else if ( 
                                        
                                            numberChecker.test(`${currentField.value}`) == trueCheck && 
                                            letterCheck.test(`${currentField.value}`) == trueCheck &&
                                            specialCharCheck.test(`${currentField.value}`) == trueCheck
                                        
                                        ) 
                                        
                                    {
                                        
                                        invalidInputForUserNameFunction()

                                    }

                                // IF LETTERS AND SPEC CHARS COMBO //
                                // =============================== //

                                    else if ( 
                                        
                                            numberChecker.test(`${currentField.value}`) == falseCheck && 
                                            letterCheck.test(`${currentField.value}`) == trueCheck &&
                                            specialCharCheck.test(`${currentField.value}`) == trueCheck
                                        
                                        ) 
                                        
                                    {
                                        
                                        invalidInputForUserNameFunction()

                                    }

                                // IF DOES NOT INCLUDE NUMBERS OR SPEC CHARS //
                                // ========================================= //

                                    else {

                                        validInputForUserNameFunction(userNameHold)

                                    }

                        }

            }

        // FOR USER EMAIL FUNCTIONS =============================== //
        // ======================================================== //

            function userEmailFieldIntakeParamsFunction (
                
                currentField, 
                otherFieldOne, 
                fieldIntakChareNumber
            
            ) 
            
            {

                // IN FUNCTION SUB FUNCTIONS ====================== //
                // ================================================ //

                    // RESET FOR INVALID INPUTS FUNCTION ========== //
                    // ============================================ //

                        function invalidInputForUserEmailFunction () {

                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                emailHold = ``
                                specCodeHold = ``

                            // LOWERCASE FIELD ==================== //
                            // ==================================== //

                                currentField.style.textTransform = "lowercase"
                                otherFieldOne.style.textTransform = "lowercase"

                            // CLOSE ALL OTHER FIELDS ============= //
                            // ==================================== //

                                closeAllOtherFieldsAndButtonsAfterUserEmailFunction(
                                    
                                    userCodeMainContainer, 
                                    noticeBoardMainContainer, 
                                    submissionButtonMainContainer
                                
                                )

                        }

                            

                            // CLOSE OTHER FIELDS AFTER USERNAME FUNCTION //
                            // ========================================== //

                                function closeAllOtherFieldsAndButtonsAfterUserEmailFunction (
                                    
                                    fieldToCloseOne, 
                                    noticeBoardToCloseOne, 
                                    subButtonToCloseOne
                                
                                ) 
                                
                                {

                                    // CLEAR FIELDS ===================== //
                                    // ================================== //

                                        fieldToCloseOne.children[0].children[0].value = ``

                                    // CLOSE FIELDS ===================== //
                                    // ================================== //

                                        // CHECK IF FIELDS ARE ALREADY OFF //
                                        // =============================== //

                                            // IF FIELDS ARE OFF THEN SKIP = //
                                            // ============================= //

                                                if ( fieldToCloseOne.style.display == `${generalOffDisplayMode}` ) {

                                                }

                                            // IF FIELDS ARE ON THE TURN OFF //
                                            // ============================= //

                                                else {

                                                    // CLOSE OTHER INPUT FIELDS  //
                                                    // ========================= //

                                                        // FADE OUT FIELDS ===== //
                                                        // ===================== //

                                                            fieldToCloseOne.style = `
                                                            
                                                                ${fadeOutInputElement}
                                                            
                                                            `

                                                        // KILL FIELDS ========= //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                fieldToCloseOne.style = `
                                                            
                                                                    ${killInputElement}
                                                                
                                                                `

                                                            },50)

                                                    // CLOSE NOTICE BOARDS ===== //
                                                    // ========================= //

                                                        // FADE OUT NOTICE BOARD //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                noticeBoardToCloseOne.style = `
                                                                
                                                                    ${fadeOutInputElement}
                                                                
                                                                `

                                                            }, 75)

                                                        // KILL NOTICE BOARD === //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                noticeBoardToCloseOne.style = `
                                                            
                                                                    ${killInputElement}
                                                                
                                                                `

                                                            },100)

                                                    // CLOSE BUTTONS =========== //
                                                    // ========================= //

                                                        // FADE OUT SUB BUTTON = //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                subButtonToCloseOne.style = `
                                                                
                                                                    ${fadeOutButtonElement}
                                                                
                                                                `
                                                                
                                                            }, 100);

                                                        // KILL SUB BUTTON ===== //
                                                        // ===================== //

                                                            setTimeout(() => {

                                                                subButtonToCloseOne.style = `
                                                            
                                                                    ${killButtonElement}
                                                                
                                                                `

                                                            },125)

                                                }

                                        

                                }



                    // APPROVE FOR VALID INPUTS FUNCTION ========== //
                    // ============================================ //

                        function validInputForUserEmailFunction (currentUpdateHoldString) {

                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                currentUpdateHoldString = `${(currentField.value).toUpperCase()}`

                            // LOWERCASE FIELD ==================== //
                            // ==================================== //

                                currentField.style.textTransform = "uppercase"

                            // OPEN NEXT INPUT FIELD ============== //
                            // ==================================== //

                                openNextFieldAfterUserEmailFunction(
                                    
                                    userCodeMainContainer, 
                                    noticeBoardMainContainer, 
                                    submissionButtonMainContainer
                                
                                )

                        }

                            

                            // OPEN NEXT FIELD AFTER USERNAME FUNCTION == //
                            // ========================================== //

                                function openNextFieldAfterUserEmailFunction (

                                    nextFieldToOpen, 
                                    noticeBoardToOpen, 
                                    submitButtonToOpen

                                ) 
                                
                                {

                                    // CLEAR FIELD FIRST ================ //
                                    // ================================== //

                                        nextFieldToOpen.children[0].children[0].value = ``

                                    // OPEN NEXT FIELD ================== //
                                    // ================================== //

                                            // IF FIELDS ARE ON THEN SKIP //
                                            // ========================== //

                                                if ( nextFieldToOpen.style.display == `${generalOnDisplayMode}` ) {

                                                }

                                            // IF FIELDS ARE OFF THE TURN ON //
                                            // ============================= //

                                                else {

                                                    // OPEN NEXT INPUT FIELD //
                                                    // ===================== //

                                                        // MAKE LIVE NEXT FIELD //
                                                        // ==================== //

                                                            nextFieldToOpen.style = `
                                                            
                                                                ${makeLiveInputElement}

                                                            `

                                                        // FADE IN NEXT FIELD = //
                                                        // ==================== //

                                                            setTimeout(() => {

                                                                nextFieldToOpen.style = `
                                                                
                                                                    ${fadeInInputElement}

                                                                `

                                                            },50)



                                                    // OPEN NOTICE BOARDS == //
                                                    // ===================== //

                                                        // MAKE LIVE NOTICE BOARD //
                                                        // ====================== //

                                                            setTimeout (() => {

                                                                noticeBoardToOpen.style = `
                                                                
                                                                    ${makeLiveNoticeBoardElement}

                                                                `

                                                            }, 50)

                                                        // FADE IN NOTICE BOARD = //
                                                        // ====================== //

                                                            setTimeout(() => {

                                                                noticeBoardToOpen.style = `
                                                                
                                                                    ${fadeInNoticeBoardElement}

                                                                `

                                                            },75)



                                                    // OPEN SUBMIT BUTTON == //
                                                    // ===================== //

                                                        // MAKE LIVE SUBMIT BUTTON //
                                                        // ======================= //

                                                            setTimeout (() => {

                                                                submitButtonToOpen.style = `
                                                                
                                                                    ${makeLiveButtonElement}

                                                                `

                                                            }, 75)

                                                        // FADE IN SUBMIT BUTTON = //
                                                        // ======================= //

                                                            setTimeout (() => {

                                                                submitButtonToOpen.style = `
                                                                
                                                                    ${fadeInButtonElement}

                                                                `

                                                            }, 100)



                                                }

                                    // MAKE UPPERCASE =================== //
                                    // ================================== //

                                        nextFieldToOpen.children[0].children[0].style.textTransform = "uppercase"

                                }



                    // GENERATE USER LOGIN CODE FUNCTION ========== //
                    // ============================================ //

                        function generateUserGhost () {

                            // RUN GHOST CREATION ================= //
                            // ==================================== //

                                var ghostLightCreate = [6, 8, 10]

                                    var ghostLightSelect = ghostLightCreate[Math.floor(Math.random()*ghostLightCreate.length)];

                                for ( generateCount = 0; generateCount < ghostLightSelect; generateCount++ ) {

                                    // PICK PLASMA AND CREATE GHOST //
                                    // ============================ //

                                        specCodeHold += `${plasmaMaps[Math.floor(Math.random()*plasmaMaps.length)]}`

                                }

                                    // UPDATE GHOST FIELD ========= //
                                    // ============================ //

                                        userCodeInputField.value = `${(specCodeHold).toUpperCase()}`

                        }




                // CHECK FIELD VALIDITY =========================== //
                // ================================================ //

                    // IF FIELD IS EMPTY ========================== //
                    // ============================================ //

                        if ( currentField.value == "" || currentField.value.length == 0 ) {
                                        
                            invalidInputForUserEmailFunction()

                        }

                    // IF FIELD IS NOT EMPTY AND BELOW 6 CHARS ==== //
                    // ============================================ //

                        else if ( currentField.value.length < fieldIntakChareNumber ) {
                                        
                            invalidInputForUserEmailFunction()

                        }

                    // ElSE IF FIELD IS 6 CHARS =================== //
                    // ============================================ //

                        else if ( currentField.value.length >= fieldIntakChareNumber ) {


                            // CHECK IF INPUT MATCHES EMAIL INPUT REQS //
                            // ======================================= //

                                // IF HAS NEEDED SPEC CHARS ========== //
                                // =================================== //

                                    if ( 
                                        
                                            currentField.value.includes("@") &&

                                            ( 
                                                
                                                currentField.value.includes("outlook") ||
                                                currentField.value.includes("proton") ||
                                                currentField.value.includes("yahoo") || 
                                                currentField.value.includes("gmail")
                                            
                                            ) &&

                                            ( 
                                                
                                                currentField.value.includes(".com") ||
                                                currentField.value.includes(".co.za") ||
                                                currentField.value.includes(".me") ||
                                                currentField.value.includes(".io") 
                                            
                                            )
                                        
                                        ) 
                                        
                                    {

                                        validInputForUserEmailFunction(emailHold)
                                        generateUserGhost()

                                    }

                                // IF MISSING NEEDED SPEC CHARS ====== //
                                // =================================== //

                                    else {

                                        invalidInputForUserEmailFunction()

                                    }

                        }

            }






    // FUNCTIONS FOR GHOST BODIES CONTROL ========================= //
    // ============================================================ //

        // GHOST CREATION FUNCTION ================================ //
        // ======================================================== //


            

        // GHOST BODY HANDLING FUNCTION =========================== //
        // ======================================================== //

            // FUNCTIONS FOR SPWANED GHOST BODIES ================= //
            // ==================================================== //

                // FUNCTIONS FOR SPWANED GHOSTS =================== //
                // ================================================ //

                    // FOR CLICKERS =============================== //
                    // ============================================ //

                        // ON MODE ================================ //
                        // ======================================== //

                            function ghostClickerOnFunction (
                                
                                ghostCurrentClicker, 
                                ghostNextClicker, 
                                ghostIconLineOne, 
                                ghostIconLineTwo, 
                                ghostBody, 
                                otherGhostCurrentClickerOne, 
                                otherGhostNextClickerOne, 
                                otherGhostCurrentClickerTwo, 
                                otherGhostNextClickerTwo, 
                                otherGhostIconLineOneOne, 
                                otherGhostIconLineOneTwo, 
                                otherGhostIconLineTwoOne, 
                                otherGhostIconLineTwoTwo, 
                                otherGhostBodyOne, 
                                otherGhostBodyTwo
                            
                            ) 
                            
                            {

                                // SWITCH OFF CURRENT CLICKER ===== //
                                // ================================ //

                                    ghostCurrentClicker.style = `
                                    
                                        ${ghostClickerOffMode}

                                    `

                                // SWITCH ON NEXT CLICKER ========= //
                                // ================================ //

                                    ghostNextClicker.style = `
                                    
                                        ${ghostClickerOnMode}

                                    `

                                // SET ICON LINES TO OPEN MODE ==== //
                                // ================================ //

                                    ghostIconLineOne.style = `
                                    
                                        ${ghostClickerLineOneOpennedMode}

                                    `

                                    ghostIconLineTwo.style = `
                                    
                                        ${ghostClickerLineTwoOpennedMode}

                                    `

                                // SWITCH ON AND FADE IN BODY ===== //
                                // ================================ //

                                    // SWITCH ON CONTAINER ======== //
                                    // ============================ //

                                        ghostBody.style = `
                                        
                                            ${ghostBodyOnMode}
                                        
                                        `

                                    // FADE IN CONTAINER ========== //
                                    // ============================ //

                                        setTimeout(() => {

                                            ghostBody.style = `
                                            
                                                ${ghostBodyOnModeFadeIn}

                                            `

                                        }, 50)




                                // CLOSE AND RESER OTHER OPEN TABS  //
                                // ================================ //

                                    // CLOSE AND RESET CLICKERS === //
                                    // ============================ //

                                        // SWITCH ON DEFAULT CLICKERS //
                                        // ========================== //

                                            otherGhostCurrentClickerOne.style = `
                                        
                                                ${ghostClickerOnMode}

                                            `

                                            otherGhostCurrentClickerTwo.style = `
                                        
                                                ${ghostClickerOnMode}

                                            `

                                        // SWITCH OFF CLOSE CLICKERS  //
                                        // ========================== //

                                            otherGhostNextClickerOne.style = `
                                        
                                                ${ghostClickerOffMode}

                                            `

                                            otherGhostNextClickerTwo.style = `
                                        
                                                ${ghostClickerOffMode}

                                            `




                                    // RESET LINE ICONS =========== //
                                    // ============================ //

                                        // FOR OTHER GHOST ONE ==== //
                                        // ======================== //

                                            otherGhostIconLineOneOne.style = `
                                            
                                                ${ghostClickerLineOneClosedMode}

                                            `

                                            otherGhostIconLineOneTwo.style = `
                                            
                                                ${ghostClickerLineTwoClosedMode}

                                            `

                                        // FOR OTHER GHOST TWO ==== //
                                        // ======================== //

                                            otherGhostIconLineTwoOne.style = `
                                            
                                                ${ghostClickerLineOneClosedMode}

                                            `

                                            otherGhostIconLineTwoTwo.style = `
                                            
                                                ${ghostClickerLineTwoClosedMode}

                                            `




                                    // CLOSE AND RESET GHOST BODY = //
                                    // ============================ //

                                        // CHECK IF BODIES ARE ALREADY CLOSED //
                                        // ================================== //

                                            // FOR BODY ONE ================= //
                                            // ============================== //

                                                // IF ALREADY CLOSED THEN SKIP //
                                                // =========================== //

                                                    if ( otherGhostBodyOne.style.display == `${(generalOffDisplayMode).toLowerCase()}` ) {

                                                    }

                                                // IF ALREADY CLOSED THEN SKIP //
                                                // =========================== //

                                                    else {

                                                        // FOR OTHER GHOST ONE //
                                                        // =================== //

                                                            otherGhostBodyOne.style = `
                                                            
                                                                ${ghostBodyOffModeFadeOut}

                                                            `

                                                                // KILL BODY = //
                                                                // =========== //

                                                                    setTimeout(() => {

                                                                        otherGhostBodyOne.style = `
                                                                        
                                                                            ${ghostBodyOffMode}

                                                                        `

                                                                    }, 200)

                                                    }



                                            // FOR BODY TWO ================= //
                                            // ============================== //

                                                // IF ALREADY CLOSED THEN SKIP //
                                                // =========================== //

                                                    if ( otherGhostBodyTwo.style.display == `${(generalOffDisplayMode).toLowerCase()}` ) {

                                                    }

                                                // IF ALREADY CLOSED THEN SKIP //
                                                // =========================== //

                                                    else {

                                                        // FOR OTHER GHOST TWO //
                                                        // =================== //

                                                            otherGhostBodyTwo.style = `
                                                            
                                                                ${ghostBodyOffModeFadeOut}

                                                            `

                                                                // KILL BODY = //
                                                                // =========== //

                                                                    setTimeout(() => {

                                                                        otherGhostBodyTwo.style = `
                                                                        
                                                                            ${ghostBodyOffMode}

                                                                        `

                                                                    }, 200)

                                                    }

                            }

                        // OFF MODE =============================== //
                        // ======================================== //

                            function ghostClickerOffFunction (
                                
                                ghostCurrentClicker, 
                                ghostNextClicker, 
                                ghostIconLineOne, 
                                ghostIconLineTwo, 
                                ghostBody
                            
                            ) 
                            
                            {

                                // SWITCH OFF CURRENT CLICKER ===== //
                                // ================================ //

                                    ghostCurrentClicker.style = `
                                    
                                        ${ghostClickerOffMode}

                                    `

                                // SWITCH ON NEXT CLICKER ========= //
                                // ================================ //

                                    ghostNextClicker.style = `
                                    
                                        ${ghostClickerOnMode}

                                    `

                                // SET ICON LINES TO CLOSE MODE === //
                                // ================================ //

                                    ghostIconLineOne.style = `
                                    
                                        ${ghostClickerLineOneClosedMode}

                                    `

                                    ghostIconLineTwo.style = `
                                    
                                        ${ghostClickerLineTwoClosedMode}

                                    `

                                // FADE OUT BODY AND KILL ========= //
                                // ================================ //

                                    // FADE OUT BODY ============== //
                                    // ============================ //

                                        ghostBody.style = `
                                        
                                            ${ghostBodyOffModeFadeOut}
                                        
                                        `

                                    // KILL BODY ================== //
                                    // ============================ //

                                        setTimeout(() => {

                                            ghostBody.style = `
                                            
                                                ${ghostBodyOffMode}

                                            `

                                        }, 200)

                            }




















// EVENTS AND ACTIONS ============================================= //
// ================================================================ //

    // EVENTS FOR INPUT FIELDS CONTROL ============================ //
    // ============================================================ //

        // EVENTS FOR USERNAME INPUT FIELD ======================== //
        // ======================================================== //

            userNameInputField.addEventListener("keyup", function () {

                userNameFieldIntakeParamsFunction(

                    userNameInputField, 
                    userEmailInputField, 
                    userCodeInputField, 
                    10, 
                    true, 
                    false

                )

            })

        // EVENTS FOR USER EMAIL INPUT FIELD ====================== //
        // ======================================================== //

            userEmailInputField.addEventListener("keyup", function () {

                userEmailFieldIntakeParamsFunction(

                    userEmailInputField, 
                    userCodeInputField, 
                    10

                )

            })

    // EVENTS FOR GHOST BODIES CONTROL ============================ //
    // ============================================================ //

        // EVENTS FOR SPWANED GHOSTS ============================== //
        // ======================================================== //

            // OPEN CLICKER ======================================= //
            // ==================================================== //

                getSpawnedGhostOpenClicker.addEventListener("click", function () {

                    ghostClickerOnFunction(
                        
                        getSpawnedGhostOpenClicker, 
                        getSpawnedGhostCloseClicker, 
                        getSpawnedGhostIconLineOne, 
                        getSpawnedGhostIconLineTwo, 
                        getSpawnedGhostBodyContainer,

                        getActiveGhostOpenClicker,
                        getActiveGhostCloseClicker,
                        getReleasedGhostOpenClicker,
                        getReleasedGhostCloseClicker,
                        getActiveGhostIconLineOne,
                        getActiveGhostIconLineTwo,
                        getReleasedGhostIconLineOne,
                        getReleasedGhostIconLineTwo,
                        getActiveGhostBodyContainer,
                        getReleasedGhostBodyContainer
                    
                    )

                })

            // CLOSE CLICKER ====================================== //
            // ==================================================== //

                getSpawnedGhostCloseClicker.addEventListener("click", function () {

                    ghostClickerOffFunction(
                        
                        getSpawnedGhostCloseClicker, 
                        getSpawnedGhostOpenClicker, 
                        getSpawnedGhostIconLineOne, 
                        getSpawnedGhostIconLineTwo, 
                        getSpawnedGhostBodyContainer
                    
                    )

                })




        // EVENTS FOR ACTIVE GHOSTS =============================== //
        // ======================================================== //

            // OPEN CLICKER ======================================= //
            // ==================================================== //

                getActiveGhostOpenClicker.addEventListener("click", function () {

                    ghostClickerOnFunction(
                        
                        getActiveGhostOpenClicker, 
                        getActiveGhostCloseClicker, 
                        getActiveGhostIconLineOne, 
                        getActiveGhostIconLineTwo, 
                        getActiveGhostBodyContainer,

                        getSpawnedGhostOpenClicker,
                        getSpawnedGhostCloseClicker,
                        getReleasedGhostOpenClicker,
                        getReleasedGhostCloseClicker,
                        getSpawnedGhostIconLineOne,
                        getSpawnedGhostIconLineTwo,
                        getReleasedGhostIconLineOne,
                        getReleasedGhostIconLineTwo,
                        getSpawnedGhostBodyContainer,
                        getReleasedGhostBodyContainer
                    
                    )

                })

            // CLOSE CLICKER ====================================== //
            // ==================================================== //

                getActiveGhostCloseClicker.addEventListener("click", function () {

                    ghostClickerOffFunction(
                        
                        getActiveGhostCloseClicker, 
                        getActiveGhostOpenClicker, 
                        getActiveGhostIconLineOne, 
                        getActiveGhostIconLineTwo, 
                        getActiveGhostBodyContainer
                    
                    )

                })




        // EVENTS FOR RELEASED GHOSTS ============================= //
        // ======================================================== //

            // OPEN CLICKER ======================================= //
            // ==================================================== //

                getReleasedGhostOpenClicker.addEventListener("click", function () {

                    ghostClickerOnFunction(
                        
                        getReleasedGhostOpenClicker, 
                        getReleasedGhostCloseClicker, 
                        getReleasedGhostIconLineOne, 
                        getReleasedGhostIconLineTwo, 
                        getReleasedGhostBodyContainer,

                        getSpawnedGhostOpenClicker,
                        getSpawnedGhostCloseClicker,
                        getActiveGhostOpenClicker,
                        getActiveGhostCloseClicker,
                        getSpawnedGhostIconLineOne,
                        getSpawnedGhostIconLineTwo,
                        getActiveGhostIconLineOne,
                        getActiveGhostIconLineTwo,
                        getSpawnedGhostBodyContainer,
                        getActiveGhostBodyContainer
                    
                    )

                })

            // CLOSE CLICKER ====================================== //
            // ==================================================== //

                getReleasedGhostCloseClicker.addEventListener("click", function () {

                    ghostClickerOffFunction(
                        
                        getReleasedGhostCloseClicker, 
                        getReleasedGhostOpenClicker, 
                        getReleasedGhostIconLineOne, 
                        getReleasedGhostIconLineTwo, 
                        getReleasedGhostBodyContainer
                    
                    )

                })



















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