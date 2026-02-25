// Feature order: YearsExperience, SelfRating, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Time1, Time2, Time3, Time4, Time5, Time6, Time7, Time8, Time9, Time10, AvgTime, WeightedTime
export function score(input) {
    var var0;
    if (input[21] <= 29.5) {
        var0 = [0.0, 1.0];
    } else {
        var0 = [1.0, 0.0];
    }
    var var1;
    if (input[17] <= 25.0) {
        var1 = [0.0, 1.0];
    } else {
        var1 = [1.0, 0.0];
    }
    var var2;
    if (input[17] <= 30.0) {
        var2 = [0.0, 1.0];
    } else {
        var2 = [1.0, 0.0];
    }
    var var3;
    if (input[19] <= 29.5) {
        var3 = [0.0, 1.0];
    } else {
        var3 = [1.0, 0.0];
    }
    var var4;
    if (input[7] <= 1.5) {
        var4 = [1.0, 0.0];
    } else {
        var4 = [0.0, 1.0];
    }
    var var5;
    if (input[16] <= 43.5) {
        var5 = [0.0, 1.0];
    } else {
        var5 = [1.0, 0.0];
    }
    var var6;
    if (input[15] <= 57.5) {
        var6 = [0.0, 1.0];
    } else {
        var6 = [1.0, 0.0];
    }
    var var7;
    if (input[20] <= 23.5) {
        var7 = [0.0, 1.0];
    } else {
        var7 = [1.0, 0.0];
    }
    var var8;
    if (input[18] <= 52.0) {
        var8 = [0.0, 1.0];
    } else {
        var8 = [1.0, 0.0];
    }
    var var9;
    if (input[17] <= 30.0) {
        var9 = [0.0, 1.0];
    } else {
        var9 = [1.0, 0.0];
    }
    var var10;
    if (input[10] <= 2.5) {
        var10 = [0.0, 1.0];
    } else {
        var10 = [1.0, 0.0];
    }
    var var11;
    if (input[19] <= 29.5) {
        var11 = [0.0, 1.0];
    } else {
        var11 = [1.0, 0.0];
    }
    var var12;
    if (input[21] <= 35.0) {
        var12 = [0.0, 1.0];
    } else {
        var12 = [1.0, 0.0];
    }
    var var13;
    if (input[6] <= 2.5) {
        var13 = [0.0, 1.0];
    } else {
        var13 = [1.0, 0.0];
    }
    var var14;
    if (input[10] <= 2.5) {
        var14 = [0.0, 1.0];
    } else {
        var14 = [1.0, 0.0];
    }
    var var15;
    if (input[3] <= 1.5) {
        var15 = [0.0, 1.0];
    } else {
        var15 = [1.0, 0.0];
    }
    var var16;
    if (input[10] <= 2.5) {
        var16 = [0.0, 1.0];
    } else {
        var16 = [1.0, 0.0];
    }
    var var17;
    if (input[19] <= 27.5) {
        var17 = [0.0, 1.0];
    } else {
        var17 = [1.0, 0.0];
    }
    var var18;
    if (input[23] <= 43.96184015274048) {
        var18 = [0.0, 1.0];
    } else {
        var18 = [1.0, 0.0];
    }
    var var19;
    if (input[10] <= 2.5) {
        var19 = [0.0, 1.0];
    } else {
        var19 = [1.0, 0.0];
    }
    var var20;
    if (input[3] <= 1.5) {
        var20 = [0.0, 1.0];
    } else {
        var20 = [1.0, 0.0];
    }
    var var21;
    if (input[16] <= 40.5) {
        var21 = [0.0, 1.0];
    } else {
        var21 = [1.0, 0.0];
    }
    var var22;
    if (input[4] <= 1.5) {
        var22 = [1.0, 0.0];
    } else {
        var22 = [0.0, 1.0];
    }
    var var23;
    if (input[17] <= 30.0) {
        var23 = [0.0, 1.0];
    } else {
        var23 = [1.0, 0.0];
    }
    var var24;
    if (input[15] <= 57.5) {
        var24 = [0.0, 1.0];
    } else {
        var24 = [1.0, 0.0];
    }
    var var25;
    if (input[16] <= 43.5) {
        var25 = [0.0, 1.0];
    } else {
        var25 = [1.0, 0.0];
    }
    var var26;
    if (input[22] <= 45.400001525878906) {
        var26 = [0.0, 1.0];
    } else {
        var26 = [1.0, 0.0];
    }
    var var27;
    if (input[21] <= 29.5) {
        var27 = [0.0, 1.0];
    } else {
        var27 = [1.0, 0.0];
    }
    var var28;
    if (input[18] <= 52.0) {
        var28 = [0.0, 1.0];
    } else {
        var28 = [1.0, 0.0];
    }
    var var29;
    if (input[20] <= 20.0) {
        var29 = [0.0, 1.0];
    } else {
        var29 = [1.0, 0.0];
    }
    var var30;
    if (input[11] <= 1.5) {
        var30 = [0.0, 1.0];
    } else {
        var30 = [1.0, 0.0];
    }
    var var31;
    if (input[18] <= 52.0) {
        var31 = [0.0, 1.0];
    } else {
        var31 = [1.0, 0.0];
    }
    var var32;
    if (input[18] <= 52.0) {
        var32 = [0.0, 1.0];
    } else {
        var32 = [1.0, 0.0];
    }
    var var33;
    if (input[17] <= 26.0) {
        var33 = [0.0, 1.0];
    } else {
        var33 = [1.0, 0.0];
    }
    var var34;
    if (input[16] <= 43.5) {
        var34 = [0.0, 1.0];
    } else {
        var34 = [1.0, 0.0];
    }
    var var35;
    if (input[23] <= 44.68928384780884) {
        var35 = [0.0, 1.0];
    } else {
        var35 = [1.0, 0.0];
    }
    var var36;
    if (input[20] <= 23.5) {
        var36 = [0.0, 1.0];
    } else {
        var36 = [1.0, 0.0];
    }
    var var37;
    if (input[13] <= 68.5) {
        var37 = [0.0, 1.0];
    } else {
        var37 = [1.0, 0.0];
    }
    var var38;
    if (input[13] <= 68.5) {
        var38 = [0.0, 1.0];
    } else {
        var38 = [1.0, 0.0];
    }
    var var39;
    if (input[0] <= 1.5) {
        var39 = [0.0, 1.0];
    } else {
        var39 = [1.0, 0.0];
    }
    var var40;
    if (input[17] <= 26.0) {
        var40 = [0.0, 1.0];
    } else {
        var40 = [1.0, 0.0];
    }
    var var41;
    if (input[16] <= 43.5) {
        var41 = [0.0, 1.0];
    } else {
        var41 = [1.0, 0.0];
    }
    var var42;
    if (input[3] <= 1.5) {
        var42 = [0.0, 1.0];
    } else {
        var42 = [1.0, 0.0];
    }
    var var43;
    if (input[6] <= 2.5) {
        var43 = [0.0, 1.0];
    } else {
        var43 = [1.0, 0.0];
    }
    var var44;
    if (input[7] <= 1.5) {
        var44 = [1.0, 0.0];
    } else {
        var44 = [0.0, 1.0];
    }
    var var45;
    if (input[21] <= 35.0) {
        var45 = [0.0, 1.0];
    } else {
        var45 = [1.0, 0.0];
    }
    var var46;
    if (input[6] <= 2.5) {
        var46 = [0.0, 1.0];
    } else {
        var46 = [1.0, 0.0];
    }
    var var47;
    if (input[18] <= 52.0) {
        var47 = [0.0, 1.0];
    } else {
        var47 = [1.0, 0.0];
    }
    var var48;
    if (input[12] <= 89.5) {
        var48 = [0.0, 1.0];
    } else {
        var48 = [1.0, 0.0];
    }
    var var49;
    if (input[19] <= 29.5) {
        var49 = [0.0, 1.0];
    } else {
        var49 = [1.0, 0.0];
    }
    var var50;
    if (input[15] <= 57.5) {
        var50 = [0.0, 1.0];
    } else {
        var50 = [1.0, 0.0];
    }
    var var51;
    if (input[20] <= 23.5) {
        var51 = [0.0, 1.0];
    } else {
        var51 = [1.0, 0.0];
    }
    var var52;
    if (input[4] <= 1.5) {
        var52 = [1.0, 0.0];
    } else {
        var52 = [0.0, 1.0];
    }
    var var53;
    if (input[3] <= 1.5) {
        var53 = [0.0, 1.0];
    } else {
        var53 = [1.0, 0.0];
    }
    var var54;
    if (input[6] <= 2.5) {
        var54 = [0.0, 1.0];
    } else {
        var54 = [1.0, 0.0];
    }
    var var55;
    if (input[6] <= 2.5) {
        var55 = [0.0, 1.0];
    } else {
        var55 = [1.0, 0.0];
    }
    var var56;
    if (input[16] <= 43.5) {
        var56 = [0.0, 1.0];
    } else {
        var56 = [1.0, 0.0];
    }
    var var57;
    if (input[17] <= 30.0) {
        var57 = [0.0, 1.0];
    } else {
        var57 = [1.0, 0.0];
    }
    var var58;
    if (input[10] <= 2.5) {
        var58 = [0.0, 1.0];
    } else {
        var58 = [1.0, 0.0];
    }
    var var59;
    if (input[17] <= 25.0) {
        var59 = [0.0, 1.0];
    } else {
        var59 = [1.0, 0.0];
    }
    var var60;
    if (input[15] <= 56.5) {
        var60 = [0.0, 1.0];
    } else {
        var60 = [1.0, 0.0];
    }
    var var61;
    if (input[1] <= 2.0) {
        var61 = [0.0, 1.0];
    } else {
        var61 = [1.0, 0.0];
    }
    var var62;
    if (input[6] <= 2.5) {
        var62 = [0.0, 1.0];
    } else {
        var62 = [1.0, 0.0];
    }
    var var63;
    if (input[10] <= 2.0) {
        var63 = [0.0, 1.0];
    } else {
        var63 = [1.0, 0.0];
    }
    var var64;
    if (input[15] <= 57.5) {
        var64 = [0.0, 1.0];
    } else {
        var64 = [1.0, 0.0];
    }
    var var65;
    if (input[10] <= 2.5) {
        var65 = [0.0, 1.0];
    } else {
        var65 = [1.0, 0.0];
    }
    var var66;
    if (input[5] <= 1.5) {
        var66 = [0.0, 1.0];
    } else {
        var66 = [1.0, 0.0];
    }
    var var67;
    if (input[16] <= 40.5) {
        var67 = [0.0, 1.0];
    } else {
        var67 = [1.0, 0.0];
    }
    return mulVectorNumber(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(addVectors(var0, var1), var2), var3), [0.0, 1.0]), var4), var5), var6), var7), [0.0, 1.0]), var8), var9), var10), [0.0, 1.0]), var11), [0.0, 1.0]), var12), var13), var14), [0.0, 1.0]), [0.0, 1.0]), var15), var16), [0.0, 1.0]), var17), [0.0, 1.0]), var18), var19), var20), var21), var22), var23), var24), var25), var26), var27), [0.0, 1.0]), [0.0, 1.0]), [0.0, 1.0]), var28), [0.0, 1.0]), [0.0, 1.0]), [0.0, 1.0]), var29), var30), var31), [0.0, 1.0]), var32), [0.0, 1.0]), var33), var34), [0.0, 1.0]), [0.0, 1.0]), var35), var36), var37), [0.0, 1.0]), [0.0, 1.0]), [0.0, 1.0]), var38), [0.0, 1.0]), var39), var40), var41), var42), var43), var44), var45), [0.0, 1.0]), [0.0, 1.0]), var46), var47), [0.0, 1.0]), var48), [0.0, 1.0]), var49), [0.0, 1.0]), var50), var51), var52), [0.0, 1.0]), var53), var54), var55), var56), var57), var58), [0.0, 1.0]), var59), var60), [0.0, 1.0]), var61), var62), [0.0, 1.0]), var63), [0.0, 1.0]), var64), var65), var66), var67), 0.01);
}
function addVectors(v1, v2) {
    var result = new Array(v1.length);
    for (var i = 0; i < v1.length; i++) {
        result[i] = v1[i] + v2[i];
    }
    return result;
}
function mulVectorNumber(v1, num) {
    var result = new Array(v1.length);
    for (var i = 0; i < v1.length; i++) {
        result[i] = v1[i] * num;
    }
    return result;
}