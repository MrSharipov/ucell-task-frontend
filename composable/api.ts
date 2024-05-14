import {useFetch} from "#imports";
import type {IAnyObject, IApiOptions} from "~/types";

export const useApi = (options?: IApiOptions) => {
	const baseUrl = 'http://localhost:5500'


	const $get = <R = IAnyObject>(
		url: string,
		query: IAnyObject = {}
	): Promise<any> => {
		return new Promise(async (resolve, reject) => {
			await $fetch(url, {
				baseURL: baseUrl,
				method: 'GET',
				query,
			}).then(response => resolve(response as R))
				.catch(err => reject(err));
		})
	}

	const $post = <R = IAnyObject>(
		url: string,
		params: IAnyObject
	): Promise<any> => {
		return new Promise(async (resolve, reject) => {
			// @ts-ignore
			const {data, pending, error, refresh} = await useFetch(url, {
				baseURL: baseUrl,
				method: 'POST',
				body: params,
			})
			if (!!error.value) {
				reject();
			} else {
				resolve({
					data: data.value.data as R,
					refresh,
					pending
				});
			}
		})
	}

	return {
		$get,
		$post,
	};
}
