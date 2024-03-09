/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %shermes -Werror -typed -dump-ir %s | %FileCheckOrRegen %s --match-full-lines

(function(){
class Vec2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = Math.sqrt(10);
        this.y = y;
    }
}

function dotProduct(a: Vec2D, b: Vec2D) {
    return a.x*b.x + a.y*b.y;
}

return [dotProduct, Vec2D];
})();

// Auto-generated content below. Please do not modify manually.

// CHECK:function global(): undefined
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = CreateScopeInst (:environment) %global(): any, empty: any
// CHECK-NEXT:  %1 = CreateFunctionInst (:object) %0: environment, %dotProduct(): functionCode
// CHECK-NEXT:  %2 = CreateFunctionInst (:object) %0: environment, %Vec2D(): functionCode
// CHECK-NEXT:  %3 = AllocObjectInst (:object) 0: number, empty: any
// CHECK-NEXT:       StorePropertyStrictInst %3: object, %2: object, "prototype": string
// CHECK-NEXT:  %5 = AllocFastArrayInst (:object) 2: number
// CHECK-NEXT:       FastArrayPushInst %1: object, %5: object
// CHECK-NEXT:       FastArrayPushInst %2: object, %5: object
// CHECK-NEXT:       ReturnInst undefined: undefined
// CHECK-NEXT:function_end

// CHECK:function dotProduct(a: object, b: object): number [typed]
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = LoadParamInst (:object) %a: object
// CHECK-NEXT:  %1 = LoadParamInst (:object) %b: object
// CHECK-NEXT:  %2 = PrLoadInst (:number) %0: object, 0: number, "x": string
// CHECK-NEXT:  %3 = PrLoadInst (:number) %1: object, 0: number, "x": string
// CHECK-NEXT:  %4 = FMultiplyInst (:number) %2: number, %3: number
// CHECK-NEXT:  %5 = PrLoadInst (:number) %0: object, 1: number, "y": string
// CHECK-NEXT:  %6 = PrLoadInst (:number) %1: object, 1: number, "y": string
// CHECK-NEXT:  %7 = FMultiplyInst (:number) %5: number, %6: number
// CHECK-NEXT:  %8 = FAddInst (:number) %4: number, %7: number
// CHECK-NEXT:       ReturnInst %8: number
// CHECK-NEXT:function_end

// CHECK:constructor Vec2D(x: number, y: number): undefined [typed]
// CHECK-NEXT:frame = []
// CHECK-NEXT:%BB0:
// CHECK-NEXT:  %0 = LoadParamInst (:object) %<this>: object
// CHECK-NEXT:  %1 = LoadParamInst (:number) %y: number
// CHECK-NEXT:  %2 = TryLoadGlobalPropertyInst (:any) globalObject: object, "Math": string
// CHECK-NEXT:  %3 = LoadPropertyInst (:any) %2: any, "sqrt": string
// CHECK-NEXT:  %4 = CallInst (:any) %3: any, empty: any, empty: any, undefined: undefined, %2: any, 10: number
// CHECK-NEXT:  %5 = CheckedTypeCastInst (:number) %4: any, type(number)
// CHECK-NEXT:       PrStoreInst %5: number, %0: object, 0: number, "x": string, true: boolean
// CHECK-NEXT:       PrStoreInst %1: number, %0: object, 1: number, "y": string, true: boolean
// CHECK-NEXT:       ReturnInst undefined: undefined
// CHECK-NEXT:function_end
