import {expect, test} from "@jest/globals";
import {calculateStatistics, InputDataType, Statistics} from "../calculation-service";


test('2h 2ms 2nc 4u', () => {
    const data:InputDataType = {
        msClassicOwners: 0,
        msOwners: 2,
        medicoverOwners:0,
        pricePerHour:80,
        hours:2,
        noCardOwners:2,
        fameTotal:0,
        courts:1,
        medicoverCardUsages:0,
        msCardUsages:4
    }

    const expected:Statistics = {
        totalPrice: '160.00',
        discount: '60.00',
        priceAfterDiscount: '100.00',
        noMs: '40.00',
        msClassic: '0.00',
        medicover: '0.00',
        MS: '10.00',
        fameDiscount: '0.00'
    }

    expect(calculateStatistics(data)).toStrictEqual(expected);
});


test('2h 2ms 1cl 1nc 4u', () => {
    const data:InputDataType = {
        msClassicOwners: 1,
        msOwners: 2,
        medicoverOwners:0,
        pricePerHour:80,
        hours:2,
        noCardOwners:1,
        fameTotal:0,
        courts:1,
        medicoverCardUsages:0,
        msCardUsages:4
    }

    const expected:Statistics = {
        totalPrice: '160.00',
        discount: '60.00',
        priceAfterDiscount: '100.00',
        noMs: '40.00',
        msClassic: '28.00',
        medicover: '0.00',
        MS: '16.00',
        fameDiscount: '0.00'
    }

    expect(calculateStatistics(data)).toStrictEqual(expected);
});

test('4c 2h 13ms 3nc 16u', () => {
    const data:InputDataType = {
        msClassicOwners: 0,
        msOwners: 13,
        medicoverOwners:0,
        pricePerHour:80,
        hours:2,
        noCardOwners:3,
        fameTotal:360,
        courts:4,
        medicoverCardUsages:0,
        msCardUsages:16
    }

    const expected:Statistics = {
        totalPrice: '640.00',
        discount: '240.00',
        priceAfterDiscount: '360.00',
        noMs: '37.50',
        msClassic: '0.00',
        medicover: '0.00',
        MS: '19.04',
        fameDiscount: '40.00'
    }

    expect(calculateStatistics(data)).toStrictEqual(expected);
});

test('5c 2h 18ms 1cl 1nc 20u', () => {
    const data:InputDataType = {
        msClassicOwners: 1,
        msOwners: 18,
        medicoverOwners:0,
        pricePerHour:55,
        hours:2,
        noCardOwners:1,
        fameTotal:250,
        courts:5,
        medicoverCardUsages:0,
        msCardUsages:20
    }

    const expected:Statistics = {
        totalPrice: '550.00',
        discount: '300.00',
        priceAfterDiscount: '250.00',
        noMs: '27.50',
        msClassic: '19.40',
        medicover: '0.00',
        MS: '11.29',
        fameDiscount: '0.00'
    }

    expect(calculateStatistics(data)).toStrictEqual(expected);
});


test('2h 2ms 2mc 8u', () => {
    const data:InputDataType = {
        msClassicOwners: 0,
        msOwners: 2,
        medicoverOwners:2,
        pricePerHour:80,
        hours:2,
        noCardOwners:0,
        fameTotal:0,
        courts:1,
        medicoverCardUsages:4,
        msCardUsages:4
    }

    const expected:Statistics = {
        totalPrice: '160.00',
        discount: '120.00',
        priceAfterDiscount: '40.00',
        noMs: '0.00',
        msClassic: '0.00',
        medicover: '10.00',
        MS: '10.00',
        fameDiscount: '0.00'
    }

    expect(calculateStatistics(data)).toStrictEqual(expected);
});

test('2h 3ms 2mc 2cl 1nc 12u', () => {
    const data:InputDataType = {
        msClassicOwners: 2,
        msOwners: 3,
        medicoverOwners:2,
        pricePerHour:80,
        hours:2,
        noCardOwners:1,
        fameTotal:0,
        courts:2,
        medicoverCardUsages:4,
        msCardUsages:8
    }

    const expected:Statistics = {
        totalPrice: '320.00',
        discount: '180.00',
        priceAfterDiscount: '140.00',
        noMs: '40.00',
        msClassic: '25.00',
        medicover: '10.00',
        MS: '10.00',
        fameDiscount: '0.00'
    }

    expect(calculateStatistics(data)).toStrictEqual(expected);
});