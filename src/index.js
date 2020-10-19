module.exports = function toReadable (number) {
    let simpleDigits = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
        }

        let doubleDigits = {
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen"
        }

        let doubleDigits1 = {
            1: "eleven",
            2: "twelve",
            3: "thirteen",
            4: "fourteen",
            5: "fifteen",
            6: "sixteen",
            7: "seventeen",
            8: "eighteen",
            9: "nineteen"
        }

        let decimalDigits = {
            0: "zero",
            1: "ten",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
        }

        let hundredDigits = {
            1: "one hundred",
            2: "two hundred",
            3: "three hundred",
            4: "four hundred",
            5: "five hundred",
            6: "six hundred",
            7: "seven hundred", 
            8: "eight hundred",
            9: "nine hundred"
        }

        let firstNumber = 0
        let secondNumber = 0
        let thirdNumber = 0


        let result = String(number).split("")

        let finishDigit = ''


         if (result.length == 1) {
            firstNumber = simpleDigits[number]
            finishDigit = firstNumber
        }



        else if (number > 10 && number < 20) {
            firstNumber = doubleDigits[number] 
                finishDigit = firstNumber
                return finishDigit
            }
        


        else if (result.length == 2 ) {
            firstNumber = decimalDigits[result[0]]
            secondNumber = simpleDigits[result[1]]

            if (secondNumber == "zero") {
                finishDigit = firstNumber
                return finishDigit
            }
            finishDigit = finishDigit.concat(firstNumber,' ', secondNumber)
            return finishDigit
        }



        else if (result.length == 3) {
            firstNumber = hundredDigits[result[0]]
            secondNumber = decimalDigits[result[1]]
            thirdNumber = simpleDigits[result[2]]

             if (result[1] == 1 && result[2] != 0) {
                 secondNumber = doubleDigits1[result[2]]
                 finishDigit = finishDigit.concat(firstNumber,' ', secondNumber)
                 return finishDigit
            }

            else if (secondNumber == "zero" && thirdNumber == "zero") {
                finishDigit = firstNumber
                return finishDigit
            }

           

            else if (thirdNumber == "zero") {
                finishDigit = finishDigit.concat(firstNumber,' ', secondNumber)
                return finishDigit
            }
            
            else if (secondNumber == "zero") {
                finishDigit = finishDigit.concat(firstNumber,' ', thirdNumber)
                return finishDigit
            }

            
            
            finishDigit = finishDigit.concat(firstNumber,' ', secondNumber,' ', thirdNumber)
        }
        
       return finishDigit
}
