/* eslint-disable prettier/prettier */
import React from 'react';
// import type {Node} from 'react';

import { Component } from "react";


/** jag kollade på denna sida för functionen
https://reactjs.org/docs/faq-functions.html
*/

class CpuTest extends Component {
    testPrime = number => {
        if (number < 2) {
            return false;
        }

        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
            return false;
            }
        }
        return true;
    };

    runTest = n => {
        var foundPrime, count, isprime;

        count = 0;
        foundPrime = 0;

        while (count < n) {
            isprime = this.testPrime(count);

            if (isprime) {
                foundPrime++;
            }
            count++;
        }
        return foundPrime;
    };
}

export default CpuTest;
// export CpuTest from './Cputest';
