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

    // FOR NAV BAR CONTROLS ======================================= //
    // ============================================================ //

        // CLICKERS GATAHER ======================================= //
        // ======================================================== //

            var getNavBarClickerOpen = document.querySelector(`.navBarClickerOpen`)
            var getNavBarClickerClose = document.querySelector(`.navBarClickerClose`)

        // ICONS LINE GATAHER ===================================== //
        // ======================================================== //

            var getNavBarIconLineOne = document.querySelector(`.navBarIconLineOne`)
            var getNavBarIconLineTwo = document.querySelector(`.navBarIconLineTwo`)
            var getNavBarIconLineThree = document.querySelector(`.navBarIconLineThree`)


                // FOR GENERAL STYLING ============================ //
                // ================================================ //

                    var navBarClickerOnModeStyle = `
                    
                        width:100%;
                        height:100%;
                        cursor:pointer;
                        display:block;
                        z-index:1;
                        position:absolute;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `

                    var navBarClickerOffModeStyle = `
                    
                        width:100%;
                        height:100%;
                        cursor:pointer;
                        display:none;
                        z-index:1;
                        position:absolute;
                        transition:all 600ms ease;
                        -o-transition:all 600ms ease;
                        -ms-transition:all 600ms ease;
                        -moz-transition:all 600ms ease;
                        -webkit-transition:all 600ms ease;

                    `


                // FOR MENU BUTTON ICON LINES STYLING ============= //
                // ================================================ //

                    // OPEN MODE ================================== //
                    // ============================================ //

                        var navBarOpenStateLineTop = `
                        
                            width:100%;
                            height:2px;
                            top:0px;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            transform:rotateZ(45deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        var navBarOpenStateLineMiddle = `
                        
                            width:100%;
                            height:2px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            opacity:0;
                            position:absolute;
                            background:#FFFFFF;
                            transform:rotateZ(0deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        var navBarOpenStateLineBottom = `
                        
                            width:100%;
                            height:2px;
                            top:0px;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            transform:rotateZ(-45deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `



                    // CLOSE MODE ================================= //
                    // ============================================ //

                        var navBarCloseStateLineTop = `
                        
                            width:100%;
                            height:2px;
                            top:-10px;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            transform:rotateZ(0deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        var navBarCloseStateLineMiddle = `
                        
                            width:100%;
                            height:2px;
                            top:0;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            opacity:1;
                            position:absolute;
                            background:#FFFFFF;
                            transform:rotateZ(0deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `

                        var navBarCloseStateLineBottom = `
                        
                            width:100%;
                            height:2px;
                            top:10px;
                            left:0;
                            right:0;
                            bottom:0;
                            margin:auto;
                            position:absolute;
                            background:#FFFFFF;
                            transform:rotateZ(0deg);
                            transition:all 600ms ease;
                            -o-transition:all 600ms ease;
                            -ms-transition:all 600ms ease;
                            -moz-transition:all 600ms ease;
                            -webkit-transition:all 600ms ease;

                        `


                // FOR FORMS AND GHOSTS STYLING =================== //
                // ================================================ //

                    // GENERAL FORM STYLE CONTROL ================= //
                    // ============================================ //

                        var formGeneralStyling = `
                        
                            width:100%;
                            position:relative;
                            transition:all 400ms ease;
                            -o-transition:all 400ms ease;
                            -ms-transition:all 400ms ease;
                            -moz-transition:all 400ms ease;
                            -webkit-transition:all 400ms ease;

                        `

                            // FOR FIELDS ========================= //
                            // ==================================== //

                                // PRIMARY FIELD ================== //
                                // ================================ //

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

                                // SECONDARY FIELDS =============== //
                                // ================================ //

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

                            // FOR BUTTONS ======================== //
                            // ==================================== //

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




    // FOR INPUTS ================================================= //
    // ============================================================ //

        // INPUT FIELDS MAIN CONTAINERS GATHER ==================== //
        // ======================================================== //

            var plateNumberMainContainer = document.querySelector(`.intakeScreenNumberPlateInputFieldContainer`)
            var provinceCodeMainContainer = document.querySelector(`.intakeScreenNumberPlateProvinceCodeInputFieldContainer`)
            var carDescriptionMainContainer = document.querySelector(`.intakeScreenCarTypeInputFieldContainer`)

                // INPUT FIELDS ACTUAL GATHER ===================== //
                // ================================================ //

                    var plateNumberInputField = document.querySelector(`.inputScreenNumberPlateInputBoxActual`)
                    var carDescriptionInputField = document.querySelector(`.inputScreenCarTypeInputBoxActual`)

                        // INPUT BUTTONS GATHER ELEMENTS ========== //
                        // ======================================== //

                            var provinceCodeElementContainer = document.querySelector(`.intakeScreenNumberPlateProvinceCodeInputFieldElement`)

                                var provinceCodeElementsCount = provinceCodeElementContainer.children.length

        // SUBMISSION ELEMENTS GATHER ============================= //
        // ======================================================== //

            var submissionButtonMainContainer = document.querySelector(`.intakeScreenSubmissionButtonContainer`)

                var submissionButtonActual = document.querySelector(`.intakeScreenSubmissionButtonActual`)






    // FOR GHOSTS ================================================= //
    // ============================================================ //

        var getGhost = document.querySelector(`.subzeroControlContainer`)





    // VALUE AND CAPTURE STRINGS ================================== //
    // ============================================================ //

        // FOR FORM INFORMATION CAPTURE STRINGS =================== //
        // ======================================================== //

            var numberPlateHold = "---"
            var provinceCodeHold = "---"
            var descriptionHold = "---"





    // STYLING STRINGS ============================================ //
    // ============================================================ //

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

        // FOR GENERAL STYLINGS =================================== //
        // ======================================================== //

            // GENERAL ON AND OFF DISPLAY MODES =================== //
            // ==================================================== //

                var generalOnDisplayMode = `block`
                var generalOffDisplayMode = `none`

            // GENERAL ON AND OFF DISPLAY MODES FOR INLINE BUTTONS  //
            // ==================================================== //

                var generalOnInlineDisplayMode = `inline-table`
                var generalOffInlineDisplayMode = `none`



















// FUNCTIONS ====================================================== //
// ================================================================ //

    // FUNCTIONS FOR NAV BAR CONTROL ============================== //
    // ============================================================ //

        // FOR OPEN AND CLOSE CLICKERS FUNCTIONS ================== //
        // ======================================================== //



            // OPEN FUNCTION ====================================== //
            // ==================================================== //

                function openNavBar () {

                    // BRING UNSELECTED ELEMENT CLICKER TO FRONT == //
                    // ============================================ //

                        getNavBarClickerClose.style = `
                        
                            ${navBarClickerOnModeStyle}

                        `

                    // SEND CURRENT CLICKER TO BACK =============== //
                    // ============================================ //

                        getNavBarClickerOpen.style = `
                        
                            ${navBarClickerOffModeStyle}

                        `


                    // CONFIGURE MENU ICON LINES ================== //
                    // ============================================ //

                        // CHANGE TO OPEN MODE ==================== //
                        // ======================================== //

                            getNavBarIconLineOne.style = `
                            
                                ${navBarOpenStateLineTop}

                            `

                            getNavBarIconLineTwo.style = `
                            
                                ${navBarOpenStateLineMiddle}

                            `

                            getNavBarIconLineThree.style = `
                            
                                ${navBarOpenStateLineBottom}

                            `

                }

            // CLOSE FUNCTION ===================================== //
            // ==================================================== //



            // OPEN FUNCTION ====================================== //
            // ==================================================== //

                function closeNavBar () {

                    // BRING UNSELECTED ELEMENT CLICKER TO FRONT == //
                    // ============================================ //

                        getNavBarClickerOpen.style = `
                        
                            ${navBarClickerOnModeStyle}

                        `

                    // SEND CURRENT CLICKER TO BACK =============== //
                    // ============================================ //

                        getNavBarClickerClose.style = `
                        
                            ${navBarClickerOffModeStyle}

                        `


                    // CONFIGURE MENU ICON LINES ================== //
                    // ============================================ //

                        // CHANGE TO CLOSE MODE =================== //
                        // ======================================== //

                            getNavBarIconLineOne.style = `
                            
                                ${navBarCloseStateLineTop}

                            `

                            getNavBarIconLineTwo.style = `
                            
                                ${navBarCloseStateLineMiddle}

                            `

                            getNavBarIconLineThree.style = `
                            
                                ${navBarCloseStateLineBottom}

                            `

                }






    // FUNCTIONS FOR INPUT FIELDS CONTROL ========================= //
    // ============================================================ //

        // GENERAL FADE IN FADE OUT KILL LIVE FUNCTIONS =========== //
        // ======================================================== //

            // FOR MAKE LIVE AND FADE IN STYLING FUNCTIONS ======== //
            // ==================================================== //

                // FOR INPUT FIELDS =============================== //
                // ================================================ //

                    function emptyOutAndOpenInputFieldElementFunction (effectedFieldElementMainContainer, effectedFieldElementActual) {

                        // CHECK IF ALREADY ALIVE ================= //
                        // ======================================== //

                            if ( effectedFieldElementMainContainer.style.display == "block" ) {

                                // DO NOTHING ===================== //
                                // ================================ //

                            }

                        // IF NOT ALIVE THEN RUN ALIVEIFIER ======= //
                        // ======================================== //

                            else {

                                // EMPTY OUT FIELD ======================== //
                                // ======================================== //

                                    effectedFieldElementActual.value = ""

                                // MAKE LIVE AND FADE IN ================== //
                                // ======================================== //

                                    // FIRST MAKE LIVE ==================== //
                                    // ==================================== //

                                        effectedFieldElementMainContainer.style = `
                                        
                                            ${makeLiveInputElement}

                                        `

                                            // THEN FADE IN BLOCK ========= //
                                            // ============================ //

                                                setTimeout(() => {

                                                    effectedFieldElementMainContainer.style = `
                                            
                                                        ${fadeInInputElement}

                                                    `

                                                }, 10)

                            }

                    }

                        // INPUT PARENT FIELD SPECIAL INSTRUCTION = //
                        // ======================================== //

                            function emptyOutAndOpenParentElementFunction (effectedFieldElementMainContainer) {

                                // CHECK IF ALREADY ALIVE ================= //
                                // ======================================== //

                                    if ( effectedFieldElementMainContainer.style.display == "block" ) {

                                        // DO NOTHING ===================== //
                                        // ================================ //

                                    }

                                // IF NOT ALIVE THEN RUN ALIVEIFIER ======= //
                                // ======================================== //

                                    else {

                                        // MAKE LIVE AND FADE IN ================== //
                                        // ======================================== //

                                            // FIRST MAKE LIVE ==================== //
                                            // ==================================== //

                                                effectedFieldElementMainContainer.style = `
                                                
                                                    ${makeLiveInputElement}

                                                `

                                                    // THEN FADE IN BLOCK ========= //
                                                    // ============================ //

                                                        setTimeout(() => {

                                                            effectedFieldElementMainContainer.style = `
                                                    
                                                                ${fadeInInputElement}

                                                            `

                                                        }, 10)

                                    }

                            }

                // FOR CONTROL BUTTONS ============================ //
                // ================================================ //

                    function emptyOutAndOpenButtonElementFunction (effectedButtonElementMainContainer) {

                        // CHECK IF ALREADY ALIVE ================= //
                        // ======================================== //

                            if ( effectedButtonElementMainContainer.style.display == "block" ) {

                                // DO NOTHING ===================== //
                                // ================================ //

                            }

                        // IF NOT ALIVE THEN RUN ALIVEIFIER ======= //
                        // ======================================== //

                            else {

                                // MAKE LIVE AND FADE IN ========== //
                                // ================================ //

                                    // FIRST MAKE LIVE ============ //
                                    // ============================ //

                                        effectedButtonElementMainContainer.style = `
                                        
                                            ${makeLiveButtonElement}

                                        `

                                            // THEN FADE IN ======= //
                                            // ==================== //

                                                setTimeout(() => {

                                                    effectedButtonElementMainContainer.style = `
                                            
                                                        ${fadeInButtonElement}

                                                    `

                                                }, 10)

                            }

                            // submissionButtonMainContainer

                    }


            // FOR FADE OUT AND KILL STYLING FUNCTIONS ============ //
            // ==================================================== //

                // FOR INPUT FIELDS =============================== //
                // ================================================ //

                    function emptyOutAndCloseInputFieldElementFunction (effectedFieldElementMainContainer, effectedFieldElementActual) {

                        // CHECK IF ALREADY DEAD ================== //
                        // ======================================== //

                            if ( effectedFieldElementMainContainer.style.display == "none" ) {

                                // DO NOTHING ===================== //
                                // ================================ //

                            }

                        // IF NOT DEAD THEN RUN DEADIFIER ========= //
                        // ======================================== //

                            else {

                                // EMPTY OUT FIELD ================ //
                                // ================================ //

                                    effectedFieldElementActual.value = ""

                                // FADE OUT AND CLOSE ============= //
                                // ================================ //

                                    // FIRST FADE OUT ============= //
                                    // ============================ //

                                        effectedFieldElementMainContainer.style = `
                                        
                                            ${fadeOutInputElement}

                                        `

                                            // THEN KILL BLOCK ==== //
                                            // ==================== //

                                                setTimeout(() => {

                                                    effectedFieldElementMainContainer.style = `
                                            
                                                        ${killInputElement}

                                                    `

                                                }, 1)

                            }

                    }

                        // INPUT PARENT FIELD SPECIAL INSTRUCTION = //
                        // ======================================== //

                            function emptyOutAndCloseParentElementFunction (effectedFieldElementMainContainer) {

                                // CHECK IF ALREADY DEAD ================== //
                                // ======================================== //

                                    if ( effectedFieldElementMainContainer.style.display == "none" ) {

                                        // DO NOTHING ===================== //
                                        // ================================ //

                                    }

                                // IF NOT DEAD THEN RUN DEADIFIER ========= //
                                // ======================================== //

                                    else {

                                        // FADE OUT AND CLOSE ============= //
                                        // ================================ //

                                            // FIRST FADE OUT ============= //
                                            // ============================ //

                                                effectedFieldElementMainContainer.style = `
                                                
                                                    ${fadeOutInputElement}

                                                `

                                                    // THEN KILL BLOCK ==== //
                                                    // ==================== //

                                                        setTimeout(() => {

                                                            effectedFieldElementMainContainer.style = `
                                                    
                                                                ${killInputElement}

                                                            `

                                                        }, 1)

                                    }

                            }

                // FOR CONTROL BUTTONS ============================ //
                // ================================================ //

                    function emptyOutAndCloseButtonElementFunction (effectedButtonElementMainContainer) {

                        // CHECK IF ALREADY DEAD ================== //
                        // ======================================== //

                            if ( effectedButtonElementMainContainer.style.display == "none" ) {

                                // DO NOTHING ===================== //
                                // ================================ //

                            }

                        // IF NOT DEAD THEN RUN DEADIFIER ========= //
                        // ======================================== //

                            else {

                                // FADE OUT AND CLOSE ============= //
                                // ================================ //

                                    // FIRST FADE OUT ============= //
                                    // ============================ //

                                        effectedButtonElementMainContainer.style = `
                                        
                                            ${fadeOutButtonElement}

                                        `

                                            // THEN KILL BLOCK ==== //
                                            // ==================== //

                                                setTimeout(() => {

                                                    effectedButtonElementMainContainer.style = `
                                            
                                                        ${killButtonElement}

                                                    `

                                                }, 1)

                            }

                    }




                    



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

                    // OPEN NEXT FOR VALID SELECTION FUNCTIONS ==== //
                    // ============================================ //

                        // FOR VALID CAPE CODES INPUT ============= //
                        // ======================================== //

                            function validCapeCodesInput () {

                                // RUN LOOP TO SWITCH OFF NON CAPE CODE BUTTONS //
                                // ============================================ //

                                    for ( nonCapeCount = 0; nonCapeCount < 9; nonCapeCount++ ) {

                                        // GET CLASS NUMBER FOR NON CAPE CODE BUTTON //
                                        // ========================================= //

                                            var getNonCapeCodeButton = document.querySelector(`.provinceCodeSelectorBlock${classNumbers[nonCapeCount]}`)

                                        // SET CODE DISPLAY TO NONE FOR NON CAPE CODE BUTTON //
                                        // ================================================= //

                                            getNonCapeCodeButton.style.display = `${generalOffInlineDisplayMode}`

                                    }

                                        // THEN RUN LOOP TO SWITCH ON CAPE CODE BUTTONS //
                                        // ============================================ //

                                            for ( capeCount = 9; capeCount < provinceCodeElementsCount; capeCount++ ) {

                                                // GET CLASS NUMBER FOR CAPE CODE BUTTON //
                                                // ===================================== //

                                                    var getCapeCodeButton = document.querySelector(`.provinceCodeSelectorBlock${classNumbers[capeCount]}`)

                                                // SET CODE BUTTON DISPLAY TO SHOW FOR CAPE CODES //
                                                // ============================================== //

                                                    getCapeCodeButton.style.display = `${generalOnInlineDisplayMode}`

                                            }
                                
                                // UPADTE FORM UPDATE HOLD TEXT =========== //
                                // ======================================== //

                                    numberPlateHold = `${String(conditionCheckerField.value).toUpperCase()}`

                                    console.log("PLATE HOLD: " + numberPlateHold)

                                // BRING DOWN NEXT INPUT FIELD //
                                // =========================== //

                                    openNextItemFunction(provinceCodeMainContainer, provinceCodeHold)

                                        // CAPITALIZE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `uppercase`
                                
                            }

                        // FOR VALID NON CAPE CODES INPUT ========= //
                        // ======================================== //

                            function validNonCapeCodesInput () {

                                // RUN LOOP TO SWITCH OFF CAPE CODE BUTTONS //
                                // ======================================== //

                                    for ( capeCount = 9; capeCount < provinceCodeElementsCount; capeCount++ ) {

                                        // GET CLASS NUMBER FOR CAPE CODE BUTTON //
                                        // ===================================== //

                                            var getCapeCodeButton = document.querySelector(`.provinceCodeSelectorBlock${classNumbers[capeCount]}`)

                                        // SET CODE DISPLAY TO NONE FOR CAPE CODE BUTTON //
                                        // ============================================= //

                                            getCapeCodeButton.style.display = `${generalOffInlineDisplayMode}`

                                    }

                                        // THEN RUN LOOP TO SWITCH ON NON CAPE CODE BUTTONS //
                                        // ================================================ //

                                            for ( nonCapeCount = 0; nonCapeCount < 9; nonCapeCount++ ) {

                                                // GET CLASS NUMBER FOR NON CAPE CODE BUTTON //
                                                // ========================================= //

                                                    var getNonCapeCodeButton = document.querySelector(`.provinceCodeSelectorBlock${classNumbers[nonCapeCount]}`)

                                                // SET CODE BUTTON DISPLAY TO SHOW FOR NON CAPE CODES //
                                                // ================================================== //

                                                    getNonCapeCodeButton.style.display = `${generalOnInlineDisplayMode}`

                                            }
                                
                                // UPADTE FORM UPDATE HOLD TEXT =========== //
                                // ======================================== //

                                    numberPlateHold = `${String(conditionCheckerField.value).toUpperCase()}`

                                    console.log("PLATE HOLD: " + numberPlateHold)

                                // BRING DOWN NEXT INPUT FIELD //
                                // =========================== //

                                    openNextItemFunction(provinceCodeMainContainer, provinceCodeHold)

                                        // CAPITALIZE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `uppercase`

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

                                // IF ONLY INCLUDES LETTERS ====== //
                                // =============================== //

                                    else if ( 
                                        
                                                numberChecker.test(`${conditionCheckerField.value}`) == falseCheck && 
                                                letterCheck.test(`${conditionCheckerField.value}`) == trueCheck
                                        
                                            ) 
                                        
                                    {
                                        
                                        invalidInput()

                                    }

                                // IF ONLY INCLUDES LETTERS AND SPEC CHARS //
                                // ======================================= //

                                    else if ( 
                                        
                                                numberChecker.test(`${conditionCheckerField.value}`) == falseCheck && 
                                                letterCheck.test(`${conditionCheckerField.value}`) == trueCheck &&
                                                specialCharCheck.test(`${conditionCheckerField.value}`) == falseCheck
                                        
                                            ) 
                                        
                                    {
                                        
                                        invalidInput()

                                    }

                                // IF ONLY INCLUDES SPEC CHARS =========== //
                                // ======================================= //

                                    else if ( 
                                        
                                                numberChecker.test(`${conditionCheckerField.value}`) == falseCheck && 
                                                letterCheck.test(`${conditionCheckerField.value}`) == falseCheck &&
                                                specialCharCheck.test(`${conditionCheckerField.value}`) == trueCheck
                                        
                                            ) 
                                        
                                    {
                                        
                                        invalidInput()

                                    }

                                // IF INCLUDES LETTERS AND NUMBERS //
                                // =============================== //

                                    else if ( 
                                        
                                                numberChecker.test(`${conditionCheckerField.value}`) == trueCheck &&
                                                specialCharCheck.test(`${conditionCheckerField.value}`) == falseCheck
                                            
                                            ) 
                                            
                                    {
                                        
                                        validNonCapeCodesInput()

                                    }

                                // IF DOES NOT INCLUDE NUMBERS === //
                                // =============================== //

                                    else {

                                        invalidInput()

                                    }

                        }

            }

        // FOR PLATE NUMBER FUNCTIONS ============================= //
        // ======================================================== //

            function provinceCodeIntakeParamsFunction (elementClassName) {

                // CHECK IF CODE BUTTON IS CLICKED ================ //
                // ================================================ //

                    // VARIABLES DECLARED FOR FUNCTION ============ //
                    // ============================================ //

                        // STRINGS ================================ //
                        // ======================================== //

                            var comparisonElementString = document.querySelector(`.${elementClassName}`)

                        // ARRAYS ================================= //
                        // ======================================== //

                            var captureButtonClassNames = []

                            var captureSelectedButton = []

                        // NUMBERS ================================ //
                        // ======================================== //

                    // IF CODE BUTTON IS CLICKED ================== //
                    // ============================================ //

                        if ( comparisonElementString.className.includes("provinceCodeSelectorBlock") ) {


                            // RUN LOOP TO STORE BUTTON CLASSNAMES  //
                            // ==================================== //

                                for ( buttonClassNameCount = 0; buttonClassNameCount < provinceCodeElementsCount; buttonClassNameCount++ ) {

                                    // VARIABLES FOR USE IN LOOP ===== //
                                    // =============================== //

                                        var selectedButtonClassNameString = `provinceCodeSelectorBlock${classNumbers[buttonClassNameCount]}ButtonElement`

                                    // FILL UP BUTTON COLLECTION ARRAY //
                                    // =============================== //

                                        captureButtonClassNames.push(selectedButtonClassNameString)


                                            // CHECK WHICH BUTTON IS SELECTED //
                                            // ============================== //

                                                // IF NUMBER IS DETECTED IN ELEMENT //
                                                // ================================ //

                                                    console.log("CLASSNAME CLICKED: " + comparisonElementString.className)

                                                    if ( 
                                                        
                                                            comparisonElementString.className.includes(`${classNumbers[buttonClassNameCount]}ButtonElement`) ||
                                                            comparisonElementString.className.includes(`${classNumbers[buttonClassNameCount]}ButtonElementText`)
                                                        
                                                        ) 
                                                        
                                                    {

                                                        // PUSH BUTTON CLASSNAME INTO ARRAY FOR USE //
                                                        // ======================================== //

                                                            captureSelectedButton.push(selectedButtonClassNameString)

                                                    }

                                                // IF NO NUMBER IS DETECTED IN ELEMENT //
                                                // =================================== //

                                                    else {

                                                        // DO NOTHING

                                                    }

                                }
                            

                            // USE BUTTON FOR STYLING AND FUNCTIONS //
                            // ==================================== //

                                // VARIABLES CREATION FOR FUNCTION  //
                                // ================================ //

                                    var createSelectedButtonElement = document.querySelector(`.${captureSelectedButton[0]}`)

                                        var createSelectedButtontextActual = createSelectedButtonElement.children[0]

                                // STYLE SELECTED BUTTON AND CONTENTS //
                                // ================================== //

                                    // RESET ALL BUTTONS TO DEFAULT MODE //
                                    // ================================= //

                                        // RUN LOOP TO GET ALL BUTTONS = //
                                        // ============================= //

                                            for ( allButtonCount = 0; allButtonCount < provinceCodeElementsCount; allButtonCount++ ) {

                                                // VARIABLES FOR USE IN THIS LOOP //
                                                // ============================== //

                                                    var getButton = document.querySelector(`.${captureButtonClassNames[allButtonCount]}`)
                                                    var getButtonTextActual = getButton.children[0]

                                                // STYLE BUTTON ELEMENT AND TEXT CONTENT //
                                                // ===================================== //

                                                    // STYLE BUTTON ==================== //
                                                    // ================================= //

                                                        getButton.style.background = `#34694f`

                                                    // STYLE BUTTON TEXT ACTUAL ======== //
                                                    // ================================= //

                                                        getButtonTextActual.style.color = `#FFFFFF`

                                            }

                                    // STYLE CURRENT BUTTON AS SELECTED  //
                                    // ================================= //

                                        createSelectedButtonElement.style.background = `#a1cbb7`

                                            createSelectedButtontextActual.style.color = `#33674e`

                            // UPADTE FORM UPDATE HOLD TEXT =========== //
                            // ======================================== //

                                provinceCodeHold = `${String(createSelectedButtontextActual.textContent).toUpperCase()}`

                                console.log("PROVINCE CODE: " + provinceCodeHold)

                            // EMPTY OUT ALL ARRAYS FOR SCRATCH RESTART //
                            // ======================================== //

                                captureButtonClassNames = []
                                captureSelectedButton = []

                            // OPEN UP NEXT FIELD ===================== //
                            // ======================================== //

                                emptyOutAndOpenInputFieldElementFunction(carDescriptionMainContainer, carDescriptionInputField)

                            // FOCUS NEXT FIELD ======================= //
                            // ======================================== //

                                carDescriptionInputField.focus()

                        }

                    // IF CODE BUTTON IS NOT CLICKED ============== //
                    // ============================================ //

                        else {

                            // DO NOTHING

                        }
                
            }

        // FOR CAR DESCRIPTION FUNCTIONS ========================== //
        // ======================================================== //

            function carDescriptionFieldIntakeParamsFunction (conditionCheckerField, closeButtonElementFunction, checkerNumber, openNextItemFunction, trueCheck, falseCheck) {

                // CHECK FIELD VALIDITY =========================== //
                // ================================================ //

                    // IF FIELD IS EMPTY ========================== //
                    // ============================================ //

                        if ( conditionCheckerField.value == "" || conditionCheckerField.value.length == 0 ) {
                                        
                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                descriptionHold = ``

                            // EMPTY OUT FIELD ==================== //
                            // ==================================== //

                                conditionCheckerField.value == ""

                            // LOWER CASE CURRENT FIELD //
                            // ======================== //

                                conditionCheckerField.style.textTransform = `lowercase`

                            // REMOVE ALL INPUT FIELDS BELOW ====== //
                            // ==================================== //

                                closeButtonElementFunction(submissionButtonMainContainer)

                        }

                    // IF FIELD IS NOT EMPTY AND BELOW 3 CHARS ==== //
                    // ============================================ //

                        else if ( conditionCheckerField.value.length < checkerNumber ) {
                                        
                            // UPADTE FORM UPDATE HOLD TEXTS  //
                            // ============================== //

                                descriptionHold = ``

                            // EMPTY OUT FIELD ==================== //
                            // ==================================== //

                                conditionCheckerField.value == ""

                            // LOWER CASE CURRENT FIELD //
                            // ======================== //

                                conditionCheckerField.style.textTransform = `lowercase`

                            // REMOVE ALL INPUT FIELDS BELOW ====== //
                            // ==================================== //

                                closeButtonElementFunction(submissionButtonMainContainer)

                        }

                    // ElSE IF FIELD IS 3 CHARS =================== //
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
                                        
                                        // UPADTE FORM UPDATE HOLD TEXTS  //
                                        // ============================== //

                                            descriptionHold = ``

                                        // LOWER CASE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `lowercase`

                                        // REMOVE ALL INPUT FIELDS BELOW //
                                        // ============================= //

                                            closeButtonElementFunction(submissionButtonMainContainer)

                                                console.log("numbers only mode")

                                    }

                                // IF ONLY INCLUDES LETTERS ====== //
                                // =============================== //

                                    else if ( 
                                        
                                            (numberChecker.test(`${conditionCheckerField.value}`) == trueCheck ||
                                            letterCheck.test(`${conditionCheckerField.value}`) == trueCheck) &&
                                            specialCharCheck.test(`${conditionCheckerField.value}`) == falseCheck 
                                        
                                        ) 
                                        
                                    {
                                        
                                        // UPADTE FORM UPDATE HOLD TEXTS  //
                                        // ============================== //

                                            descriptionHold = `${String(conditionCheckerField.value).toUpperCase()}`

                                        // UPPER CASE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `uppercase`

                                        // BRING DOWN SUBMISSION BUTTON //
                                        // ============================ //

                                            openNextItemFunction(submissionButtonMainContainer)

                                                console.log("letters only mode")

                                    }

                                // IF ONLY SPECIAL CHARS ========= //
                                // =============================== //

                                    else if ( 
                                        
                                            numberChecker.test(`${conditionCheckerField.value}`) == falseCheck && 
                                            letterCheck.test(`${conditionCheckerField.value}`) == falseCheck &&
                                            specialCharCheck.test(`${conditionCheckerField.value}`) == trueCheck 
                                        
                                        ) 
                                        
                                    {
                                        
                                        // UPADTE FORM UPDATE HOLD TEXTS  //
                                        // ============================== //

                                            descriptionHold = ``

                                        // LOWER CASE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `lowercase`

                                        // REMOVE ALL INPUT FIELDS BELOW //
                                        // ============================= //

                                            closeButtonElementFunction(submissionButtonMainContainer)

                                    }

                                // IF SPECIAL CHARS EXIST ======== //
                                // =============================== //

                                    else if ( 
                                        
                                            ( numberChecker.test(`${conditionCheckerField.value}`) == trueCheck || 
                                            letterCheck.test(`${conditionCheckerField.value}`) == trueCheck ) &&
                                            specialCharCheck.test(`${conditionCheckerField.value}`) == trueCheck 
                                        
                                        ) 
                                        
                                    {
                                        
                                        // UPADTE FORM UPDATE HOLD TEXTS  //
                                        // ============================== //

                                            descriptionHold = ``

                                        // LOWER CASE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `lowercase`

                                        // REMOVE ALL INPUT FIELDS BELOW //
                                        // ============================= //

                                            closeButtonElementFunction(submissionButtonMainContainer)

                                        console.log("FOUND 'SOME' SPEC CHARS")

                                    }

                                // IF DOES NOT INCLUDE LETTERS === //
                                // =============================== //

                                    else {
                                        
                                        // UPADTE FORM UPDATE HOLD TEXTS  //
                                        // ============================== //

                                            descriptionHold = ``

                                        // LOWER CASE CURRENT FIELD //
                                        // ======================== //

                                            conditionCheckerField.style.textTransform = `lowercase`

                                        // REMOVE ALL INPUT FIELDS BELOW //
                                        // ============================= //

                                            closeButtonElementFunction(submissionButtonMainContainer)

                                    }

                        }

            }


            

        // FOR SUBMISSION BUTTON FUNCTIONS ======================== //
        // ======================================================== //

            function buttonSubmissionFunction () {

                // VARIABLES FOR USE IN THIS SECTION ============== //
                // ================================================ //

                    // CREATION VARIABLES ========================= //
                    // ============================================ //

                // CREATE NEW FORM ELEMENTS FOR SUB =============== //
                // ================================================ //

                    // CHECK IF ELEMENT IS EMPTY TO POPULATE OR NOT //
                    // ============================================ //

                        // IF SPACE IS EMPTY ====================== //
                        // ======================================== //

                            if ( getGhost.children.length == 0 || getGhost.children.length < 1 ) {

                                ghostFunction()

                            }

                        // IF SPACE IS NOT EMPTY ================== //
                        // ======================================== //

                            else {

                                // EMPTY OUT GHOST ================ //
                                // ================================ //

                                    getGhost.removeChild(getGhost.children[0])

                                // GENERATE GHOST ================= //
                                // ================================ //

                                    ghostFunction()

                            }

            }


            

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

                                // SHELL PLATE ==================== //
                                // ================================ //

                                    var shellPlateMain = document.createElement(`div`)

                                        var shellPlateResizer = document.createElement(`div`)

                                            var shellPlateInput = document.createElement(`input`)

                                // SHELL CODE ===================== //
                                // ================================ //

                                    var shellCodeMain = document.createElement(`div`)

                                        var shellCodeResizer = document.createElement(`div`)

                                            var shellCodeInput = document.createElement(`input`)

                                // SHELL DESCRIPTION ============== //
                                // ================================ //

                                    var shellDescriptionMain = document.createElement(`div`)

                                        var shellDescriptionResizer = document.createElement(`div`)

                                            var shellDescriptionInput = document.createElement(`input`)

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

                                // SHELL PLATE ==================== //
                                // ================================ //

                                    shellPlateMain.className = `subzeroNumberPlateIntakeContainer`

                                        shellPlateResizer.className = `subzeroNumberPlateIntakeElement`

                                            shellPlateInput.className = `subzeroNumberPlateIntakeActual`

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeMain.className = `subzeroProvinceSelectIntakeContainer`

                                        shellCodeResizer.className = `subzeroProvinceSelectIntakeElement`

                                            shellCodeInput.className = `subzeroProvinceSelectIntakeActual`

                                // SHELL DESCRIPTION ============== //
                                // ================================ //

                                    shellDescriptionMain.className = `subzeroTypeDescriptionIntakeContainer`

                                        shellDescriptionResizer.className = `subzeroTypeDescriptionIntakeElement`

                                            shellDescriptionInput.className = `subzeroTypeDescriptionIntakeActual`

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

                                // SHELL PLATE ==================== //
                                // ================================ //

                                    shellPlateMain.style = `
                                    
                                        ${formFieldStarterMainContainer}

                                    `

                                        shellPlateResizer.style = `
                                        
                                            ${formFieldStarterContentResizer}

                                        `

                                            shellPlateInput.style = `
                                            
                                                ${formFieldStarterInputTextBlock}

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

                                // SHELL DESCRIPTION ============== //
                                // ================================ //

                                    shellDescriptionMain.style = `
                                    
                                        ${formFieldSecondariesMainContainer}

                                    `

                                        shellDescriptionResizer.style = `
                                        
                                            ${formFieldSecondariesContentResizer}

                                        `

                                            shellDescriptionInput.style = `
                                            
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
                            ghostShell.setAttribute("action", "/")

                                // SHELL PLATE ==================== //
                                // ================================ //

                                    shellPlateInput.setAttribute("id", "plateIntake")
                                    shellPlateInput.setAttribute("name", "plateIntake")
                                    shellPlateInput.setAttribute("type", "text")
                                    shellPlateInput.setAttribute("readonly", true)

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeInput.setAttribute("id", "codeIntake")
                                    shellCodeInput.setAttribute("name", "codeIntake")
                                    shellCodeInput.setAttribute("type", "text")
                                    shellCodeInput.setAttribute("readonly", true)

                                // SHELL DESCRIPTION ============== //
                                // ================================ //

                                    shellDescriptionInput.setAttribute("id", "descriptionIntake")
                                    shellDescriptionInput.setAttribute("name", "descriptionIntake")
                                    shellDescriptionInput.setAttribute("type", "text")
                                    shellDescriptionInput.setAttribute("readonly", true)

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

                                    shellButtonActual.setAttribute("type", "submit")

                        // TEXT INPUTS ============================ //
                        // ======================================== //

                                // SHELL PLATE ==================== //
                                // ================================ //

                                    shellPlateInput.value = `${String(plateNumberInputField.value).toUpperCase()}`

                                // SHELL CODE ===================== //
                                // ================================ //

                                    shellCodeInput.value = `${provinceCodeHold}`

                                // SHELL DESCRIPTION ============== //
                                // ================================ //

                                    shellDescriptionInput.value = `${String(carDescriptionInputField.value).toUpperCase()}`

                                // SHELL DATE ===================== //
                                // ================================ //

                                    shellDateInput.value = `${String(dateConsolidatedString).toUpperCase()}`

                                // SHELL TIME ===================== //
                                // ================================ //

                                    shellTimeInput.value = `${String(timeConsolidatedString).toUpperCase()}`

                                // SHELL BUTTON =================== //
                                // ================================ //

                                    shellButtonActual.value = `upload`
                                    shellButtonActual.textContent = `upload`

                        // APPEND ================================= //
                        // ======================================== //

                            getGhost.appendChild(ghostShell)

                                // SHELL PLATE ==================== //
                                // ================================ //

                                    ghostShell.appendChild(shellPlateMain)

                                        shellPlateMain.appendChild(shellPlateResizer)

                                            shellPlateResizer.appendChild(shellPlateInput)

                                // SHELL CODE ===================== //
                                // ================================ //

                                    ghostShell.appendChild(shellCodeMain)

                                        shellCodeMain.appendChild(shellCodeResizer)

                                            shellCodeResizer.appendChild(shellCodeInput)

                                // SHELL DESCRIPTION ============== //
                                // ================================ //

                                    ghostShell.appendChild(shellDescriptionMain)

                                        shellDescriptionMain.appendChild(shellDescriptionResizer)

                                            shellDescriptionResizer.appendChild(shellDescriptionInput)

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

                // FUNCTIONS FOR USE IN FUNCTION ================== //
                // ================================================ //

                // EVENTS FOR USE IN FUNCTION ===================== //
                // ================================================ //

                    // SUBMIT BUTTON ============================== //
                    // ============================================ //

                        setTimeout(() => {

                            shellButtonActual.click()

                            console.log("subbed")

                        }, 100)

            }




















// EVENTS AND ACTIONS ============================================= //
// ================================================================ //

    // EVENTS FOR NAV BAR CONTROL ================================= //
    // ============================================================ //

        // FOR OPEN AND CLOSE CLICKERS EVENTS ===================== //
        // ======================================================== //

            getNavBarClickerOpen.addEventListener("click", function () {

                openNavBar()

            })

            getNavBarClickerClose.addEventListener("click", function () {

                closeNavBar()

            })






    // EVENTS FOR FIELDS AND SUBMISSION BUTTON ELEMENTS =========== //
    // ============================================================ //

        // FOR FIELD EVENTS ======================================= //
        // ======================================================== //

            // PLATE NUMBER FIELD FUNCTION ======================== //
            // ==================================================== //

                plateNumberInputField.addEventListener("keyup", function () {

                    plateNumberFieldIntakeParamsFunction
                    
                        (

                            plateNumberInputField,
                            carDescriptionInputField,
                            emptyOutAndCloseInputFieldElementFunction,
                            emptyOutAndCloseParentElementFunction,
                            emptyOutAndCloseButtonElementFunction,
                            6,
                            emptyOutAndOpenParentElementFunction,
                            true,
                            false
                        
                        )

                })


            // CAR DESCRIPTION FIELD FUNCTION ======================== //
            // ==================================================== //

                carDescriptionInputField.addEventListener("keyup", function () {

                    carDescriptionFieldIntakeParamsFunction
                    
                        (

                            carDescriptionInputField,
                            emptyOutAndCloseButtonElementFunction,
                            5,
                            emptyOutAndOpenButtonElementFunction,
                            true,
                            false
                        
                        )

                })

        // FOR BUTTON EVENTS ====================================== //
        // ======================================================== //

            submissionButtonActual.addEventListener("click", function () {

                buttonSubmissionFunction()

            })



















// AUTORUN EVENTS ================================================= //
// ================================================================ //

    // CHECK PAGE LANGUAGE ======================================== //
    // ============================================================ //

    // FOCUS ON FIRST FIELD ======================================= //
    // ============================================================ //

        plateNumberInputField.focus()

    // CHECK CLICKED ON ELEMENT =================================== //
    // ============================================================ //

        document.addEventListener("click", function (element) {

            // CLASSNAME CAPTURED ================================= //
            // ==================================================== //

                var getSelectedClassName = `${element.srcElement.className}`

            // RUN DETECTOR FUNCTION AND INCLUDE CAPTURED CLASS NAME //
            // ===================================================== //

                provinceCodeIntakeParamsFunction(getSelectedClassName)
            
        })