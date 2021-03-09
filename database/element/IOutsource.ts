import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IOutsource extends IDatabaseBase{
    charge: string,
    project: string,
    vendor: string,
    email: string,
    phone: string,
    payment: string,
    expectedpaymentdate: number,
    actualpaymentdate: number,
}