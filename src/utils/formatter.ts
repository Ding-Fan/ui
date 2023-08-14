import dayjs from "dayjs";
import _ from "lodash";
import { Address } from "wagmi";
import { Utils } from "./utils";
// import { IExampleItemFormatted } from '@/hooks'

interface IExplorerTable {
  cryptoName: "USDC";
  amount: number;
  sender: Address;
  timestamp: number;
  status: any;
}

export namespace Formatter {
  // export const formatCallOpenAiResult = (item: any): IOpenAiResult => {
  //   let result
  //   if (item) {
  //     result = Utils.convertKeysToCamelCase(item)
  //   }

  //   return result
  // }

  export const formatExplorerTable = (
    item: any
  ): IExplorerTable | undefined => {
    let result;

    if (item) {
      result = {
        ...Utils.convertKeysToCamelCase(item),
        cryptoName: "USDC",
        amount: item.amount.origin.toNumber(),
        sender: item.sender,
        timestamp: item.lastUpdateTime.toNumber(),
        // timestamp: _.toNumber(item.timestamp),
        // status: 'pending',
        // blockID: item.id,
        // blockHeight: item.height,
        // previousBlock: item.nonce,
        // difficulty: item.difficulty_target,
        // miner: item.owner,
        // previousStateRoot: item.previous_ledger_root,
        // timestampMS: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
        // hash: item.block_hash,
        // transactions: item.transactions_id,
        // proofTarget: item.proof_target,
        // coinbaseTarget: item.coinbase_target,
        // coinbaseReward: item.coinbase_reward,
      } as IExplorerTable;
    }

    return result;
  };

  // export const formatTransaction = (item: any): ITransaction | undefined => {
  //   let result

  //   if (item) {
  //     result = {
  //       ...Utils.convertKeysToCamelCase(item),
  //       // ...item,
  //       // ...Utils.convertKeysToCamelCase(item.data),
  //       height: _.toNumber(item.data?.block_height) || item.block_height,
  //       timestamp: _.toNumber(item.data?.timestamp || item.timestamp),
  //       totalFee: item.fee,
  //       // timestamp: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
  //       functionCallInput: item.function_call_input?.map((inputItem: any) => {
  //         return {
  //           ...Utils.convertKeysToCamelCase(inputItem),
  //           serialNumber: inputItem.data.serial_number,
  //           tag: inputItem.data.tag,
  //         }
  //       }),
  //       functionCallOutput: item.function_call_output?.map(
  //         Utils.convertKeysToCamelCase
  //       ),
  //     } as ITransaction
  //   }

  //   return result
  // }

  interface IBank {
    tag: string;
    isPrivate: boolean;
    encryptKey: string;
    details: string;
  }

  type BankWithId = IBank & { localId?: string; id: BigInt };
  type MaybeBank = BankWithId | null;

  export const formatBank = (data: MaybeBank): BankWithId => {
    let result: MaybeBank = {
      id: BigInt(0),
      details: "",
      encryptKey: "",
      isPrivate: false,
      tag: "",
    };

    if (data) {
      result = { ...result, ...data };
    }

    if (result.hasOwnProperty("localId")) {
      delete result.localId;
    }

    return result;
  };

  // export const formatBlock = (item: any): IBlockDetail | undefined => {
  //   let result

  //   if (item) {
  //     result = {
  //       // blockID: item.id,
  //       // blockHeight: item.height,
  //       // previousBlock: item.nonce,
  //       // difficulty: item.difficulty_target,
  //       // miner: item.owner,
  //       // previousStateRoot: item.previous_ledger_root,
  //       ...Utils.convertKeysToCamelCase(item),
  //       timestamp: _.toNumber(item.timestamp),
  //       timestampMS: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
  //       hash: item.block_hash,
  //       transactions: item.transactions_id,
  //       // proofTarget: item.proof_target,
  //       // coinbaseTarget: item.coinbase_target,
  //       // coinbaseReward: item.coinbase_reward,
  //     } as IBlockDetail
  //   }

  //   return result
  // }

  // export const formatExampleItem = (
  //   item: any
  // ): IExampleItemFormatted | undefined => {
  //   let result

  //   if (item) {
  //     result = {
  //       ...Utils.convertKeysToCamelCase(item),
  //       // addressCity: item.address.city,
  //       // addressZipCode: item.address.zipcode,
  //       // blockID: item.id,

  //       // blockHeight: item.height,
  //       // previousBlock: item.nonce,
  //       // difficulty: item.difficulty_target,
  //       // miner: item.owner,
  //       // previousStateRoot: item.previous_ledger_root,
  //       // timestamp: _.toNumber(item.timestamp),
  //       // timestampMS: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
  //       // hash: item.block_hash,
  //       // transactions: item.transactions_id,
  //       // proofTarget: item.proof_target,
  //       // coinbaseTarget: item.coinbase_target,
  //       // coinbaseReward: item.coinbase_reward,
  //     } as IExampleItemFormatted
  //   }

  //   return result
  // }

  // export const formatLeaderBoard = (
  //   item: any
  // ): ILeaderBoardDetail | undefined => {
  //   let result

  //   if (item) {
  //     result = {
  //       // blockID: item.id,
  //       // blockHeight: item.height,
  //       // previousBlock: item.nonce,
  //       // difficulty: item.difficulty_target,
  //       // miner: item.owner,
  //       // previousStateRoot: item.previous_ledger_root,
  //       ...Utils.convertKeysToCamelCase(item),
  //       address: item.info?.address || item.address,
  //       // timestamp: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
  //       // hash: item.block_hash,
  //       // transactions: item.transactions_id,
  //       // proofTarget: item.proof_target,
  //       totalIncentiveReward: item.count?.reward_sum || item.total_incentive,
  //       totalMainnetReward: item.count?.mainnet_reward || item.mainnet_reward,
  //       totalCoinbaseReward: item.count?.total_coinbase_reward,
  //       totalTargetFound: item.count?.solution_sum,
  //       totalSolutionCount: item.count?.solution_count,
  //       estimatedSpeed: item.info?.speed || item.speed,
  //       data: item.data?.map((item: any) => {
  //         return {
  //           ...Utils.convertKeysToCamelCase(item),
  //           timestamp: _.toNumber(item.timestamp),
  //         }
  //       }),
  //     } as ILeaderBoardDetail
  //   }

  //   return result
  // }

  export const timestampFormatter = (timestamp: number) => {
    let result = dayjs.unix(timestamp).format("YYYY-MM-DD HH:mm:ss");
    return result;
  };
}
