function solution(N) {
    //convert N to binary string
    var bin = N.toString(2);
    //create variable for Maximum Gap and Current Gap
    var max = 0;
    var cur = 0;
    //Create Boolean value defaulting as false
    bool = false;
    //Iterate over binary string
    for (i = 0; i < bin.length; i++) {
        //Condition 1: Number at the index is equal to 1
        if (bin[i] == 1) {
            //Compare current and max values=>assign the highest value as max
            max = Math.max(max, cur);
            //Reset Current Gap to 0
            cur = 0;
            //Assert Bool Value as true
            bool = true;
            //Condition 2: If Bool Value is equal to true and the number in bin at the current index i is equal to 0 
        } else if (bool == true && bin[i] == 0) {
            //Increment Current Gap by 1
            ++cur
        }
    }
    //Return or console.log solution
    console.log(bin, max);
}

solution(1);
//expected output (001, 0)
solution(10453);
//expected output (10100011010101, 3)
solution(1041);
//expected output (10000010001, 5)
solution(2234);
//expected output (100010111010, 3)
solution(7483);
//expected output (1110100111011, 2)
solution(118);
//expected output (1110110 1)
solution(18);
//expected output (10010 2)
solution(17);
//expected output (10001 3)
solution(1647388578367858834673832678745767328934);
//expected output (10011010111010110110111111111010010111010011001001100000000000000000000000000000000000000000000000000000000000000000000000000000000, 2)