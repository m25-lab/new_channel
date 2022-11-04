import { Client, registry, MissingWalletError } from 'AstraProtocol-channel-client-ts'

import { Channel } from "AstraProtocol-channel-client-ts/channel.channel/types"
import { Commitment } from "AstraProtocol-channel-client-ts/channel.channel/types"
import { Fwdcommit } from "AstraProtocol-channel-client-ts/channel.channel/types"
import { Params } from "AstraProtocol-channel-client-ts/channel.channel/types"


export { Channel, Commitment, Fwdcommit, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Commitment: {},
				CommitmentAll: {},
				Channel: {},
				ChannelAll: {},
				Fwdcommit: {},
				FwdcommitAll: {},
				
				_Structure: {
						Channel: getStructure(Channel.fromPartial({})),
						Commitment: getStructure(Commitment.fromPartial({})),
						Fwdcommit: getStructure(Fwdcommit.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getCommitment: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Commitment[JSON.stringify(params)] ?? {}
		},
				getCommitmentAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CommitmentAll[JSON.stringify(params)] ?? {}
		},
				getChannel: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Channel[JSON.stringify(params)] ?? {}
		},
				getChannelAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ChannelAll[JSON.stringify(params)] ?? {}
		},
				getFwdcommit: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Fwdcommit[JSON.stringify(params)] ?? {}
		},
				getFwdcommitAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.FwdcommitAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: channel.channel initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCommitment({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryCommitment( key.index)).data
				
					
				commit('QUERY', { query: 'Commitment', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCommitment', payload: { options: { all }, params: {...key},query }})
				return getters['getCommitment']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCommitment API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCommitmentAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryCommitmentAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChannelChannel.query.queryCommitmentAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CommitmentAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCommitmentAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCommitmentAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCommitmentAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryChannel({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryChannel( key.index)).data
				
					
				commit('QUERY', { query: 'Channel', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryChannel', payload: { options: { all }, params: {...key},query }})
				return getters['getChannel']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryChannel API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryChannelAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryChannelAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChannelChannel.query.queryChannelAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ChannelAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryChannelAll', payload: { options: { all }, params: {...key},query }})
				return getters['getChannelAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryChannelAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFwdcommit({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryFwdcommit( key.index)).data
				
					
				commit('QUERY', { query: 'Fwdcommit', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFwdcommit', payload: { options: { all }, params: {...key},query }})
				return getters['getFwdcommit']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFwdcommit API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryFwdcommitAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.ChannelChannel.query.queryFwdcommitAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.ChannelChannel.query.queryFwdcommitAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'FwdcommitAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryFwdcommitAll', payload: { options: { all }, params: {...key},query }})
				return getters['getFwdcommitAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryFwdcommitAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgReceiverwithdraw({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgReceiverwithdraw({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgReceiverwithdraw:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgReceiverwithdraw:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawTimelock({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgWithdrawTimelock({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawTimelock:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawTimelock:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgOpenChannel({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgOpenChannel({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgOpenChannel:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgOpenChannel:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgFund({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgFund({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFund:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgFund:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAcceptfund({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgAcceptfund({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAcceptfund:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAcceptfund:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCommitment({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgCommitment({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCommitment:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCommitment:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgReceivercommit({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgReceivercommit({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgReceivercommit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgReceivercommit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawHashlock({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgWithdrawHashlock({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawHashlock:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawHashlock:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCloseChannel({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgCloseChannel({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCloseChannel:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCloseChannel:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendercommit({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgSendercommit({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendercommit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendercommit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSenderwithdrawhashlock({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgSenderwithdrawhashlock({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSenderwithdrawhashlock:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSenderwithdrawhashlock:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSenderwithdrawtimelock({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.ChannelChannel.tx.sendMsgSenderwithdrawtimelock({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSenderwithdrawtimelock:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSenderwithdrawtimelock:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgReceiverwithdraw({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgReceiverwithdraw({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgReceiverwithdraw:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgReceiverwithdraw:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawTimelock({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgWithdrawTimelock({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawTimelock:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawTimelock:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgOpenChannel({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgOpenChannel({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgOpenChannel:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgOpenChannel:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgFund({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgFund({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgFund:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgFund:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgAcceptfund({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgAcceptfund({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAcceptfund:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgAcceptfund:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCommitment({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgCommitment({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCommitment:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCommitment:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgReceivercommit({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgReceivercommit({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgReceivercommit:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgReceivercommit:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawHashlock({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgWithdrawHashlock({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawHashlock:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawHashlock:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgCloseChannel({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgCloseChannel({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCloseChannel:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgCloseChannel:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendercommit({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgSendercommit({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendercommit:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendercommit:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSenderwithdrawhashlock({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgSenderwithdrawhashlock({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSenderwithdrawhashlock:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSenderwithdrawhashlock:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSenderwithdrawtimelock({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.ChannelChannel.tx.msgSenderwithdrawtimelock({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSenderwithdrawtimelock:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSenderwithdrawtimelock:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
