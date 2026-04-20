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

            var numberPlateHold = "---"
            var provinceCodeHold = "---"
            var descriptionHold = "---"




    // FOR INPUTS ================================================= //
    // ============================================================ //

        // INPUT FIELDS MAIN CONTAINERS GATHER ==================== //
        // ======================================================== //

            var plateNumberMainContainer = document.querySelector(`.intakeScreenNumberPlateInputFieldContainer`)

                // INPUT FIELDS ACTUAL GATHER ===================== //
                // ================================================ //

                    var plateNumberInputField = document.querySelector(`.inputScreenNumberPlateInputBoxActual`)

        // SUBMISSION ELEMENTS GATHER ============================= //
        // ======================================================== //

            var submissionButtonMainContainer = document.querySelector(`.intakeScreenSubmissionButtonContainer`)

                var submissionButtonActual = document.querySelector(`.intakeScreenSubmissionButtonActual`)






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

        // FOR PLATE NUMBER FUNCTIONS ============================= //
        // ======================================================== //

            function plateNumberFieldIntakeParamsFunction (conditionCheckerField, effectTertiaryField, closeInputElementFunction, closeInputElementFunctionSpecial ,closeButtonElementFunction, checkerNumber, openNextItemFunction, trueCheck, falseCheck) {

                // IN FUNCTION SUB FUNCTIONS ====================== //
                // ================================================ //

                    // RESET FOR INVALID SELECTION FUNCTION ======= //
                    // ============================================ //

                        function invalidInput () {

                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                numberPlateHold = ``
                                provinceCodeHold = ``
                                descriptionHold = ``

                            // LOWERCASE FIELD ==================== //
                            // ==================================== //

                                conditionCheckerField.style.textTransform = "lowercase"
                                effectTertiaryField.style.textTransform = "lowercase"

                            // REMOVE ALL INPUT FIELDS BELOW ====== //
                            // ==================================== //

                                closeInputElementFunctionSpecial(provinceCodeMainContainer, provinceCodeHold)
                                closeInputElementFunction(carDescriptionMainContainer, carDescriptionInputField)
                                closeButtonElementFunction(submissionButtonMainContainer)

                        }

                // CHECK FIELD VALIDITY =========================== //
                // ================================================ //

                    // IF FIELD IS EMPTY ========================== //
                    // ============================================ //

                        if ( conditionCheckerField.value == "" || conditionCheckerField.value.length == 0 ) {
                                        
                            invalidInput()

                        }

                    // IF FIELD IS NOT EMPTY AND BELOW 6 CHARS ==== //
                    // ============================================ //

                        else if ( conditionCheckerField.value.length < checkerNumber ) {
                                        
                            invalidInput()

                        }

                    // ElSE IF FIELD IS 6 CHARS =================== //
                    // ============================================ //

                        else if ( conditionCheckerField.value.length >= checkerNumber ) {

                            // CHECK IF INCLUDES NUMBERS ========= //
                            // =================================== //

                                // IF ONLY INCLUDES NUMBERS ====== //
                                // =============================== //

                                    if ( 
                                        
                                            numberChecker.test(`${conditionCheckerField.value}`) == trueCheck && 
                                            letterCheck.test(`${conditionCheckerField.value}`) == falseCheck &&
                                            specialCharCheck.test(`${conditionCheckerField.value}`) == falseCheck
                                        
                                        ) 
                                        
                                    {
                                        
                                        validCapeCodesInput()

                                    }

                                // IF DOES NOT INCLUDE NUMBERS === //
                                // =============================== //

                                    else {

                                        invalidInput()

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

                                        // FOR OTHER GHOST ONE ==== //
                                        // ======================== //

                                            otherGhostBodyOne.style = `
                                            
                                                ${ghostBodyOffModeFadeOut}

                                            `

                                                // KILL BODY ====== //
                                                // ================ //

                                                    setTimeout(() => {

                                                        otherGhostBodyOne.style = `
                                                        
                                                            ${ghostBodyOffMode}

                                                        `

                                                    }, 200)

                                        // FOR OTHER GHOST ONE ==== //
                                        // ======================== //

                                            otherGhostBodyTwo.style = `
                                            
                                                ${ghostBodyOffModeFadeOut}

                                            `

                                                // KILL BODY ====== //
                                                // ================ //

                                                    setTimeout(() => {

                                                        otherGhostBodyTwo.style = `
                                                        
                                                            ${ghostBodyOffMode}

                                                        `

                                                    }, 200)

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