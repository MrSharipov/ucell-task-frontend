import type {IAnyObject} from "~/types";

export const getNotifications = (text: string | string[], type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
	text = Array.isArray(text) ? text : [text];
	text.forEach(t => {
		switch (type) {
			case 'success':
				console.log(t);
				break;
			case 'info':
				console.info(t);
				break;
			case 'error':
				console.error(t);
				break;
			case 'warning':
				console.warn(t);
				break;
		}
	});
};

export const typeOfObject = (value: any): boolean => {
	return typeof value === 'object' && !Array.isArray(value) && value !== null;
};

export const isNoEmpty = (value: any): boolean => {
	return typeof value !== 'undefined' &&
		value !== null &&
		typeof value !== 'number' &&
		value !== '';
};

export const hasField = (object: any, key: string | number): boolean => {
	return typeOfObject(object) && typeof object[key] !== 'undefined';
};

export const getField = <T = IAnyObject, V = any>(object: T, key: string | number, default_value: any = null): V => {
	return typeOfObject(object) && typeof object[key] !== 'undefined' ? object[key] : default_value;
};

export const getFields = (object: any, ...args: Array<string | number>): any => {
	if (typeOfObject(object)) {
		for (let i = 0; i < args.length; i++) {
			const key = args[i];
			if (typeof object[key] !== 'undefined') {
				if (typeof args[i + 1] !== 'undefined') {
					object = object[key];
				} else {
					return object[key];
				}
			}
		}
		console.log('----');
	}
	return null;
};

export const getFieldIfNoEmpty = <T = any>(object: any, key: string, default_value: unknown = null): T => {
	return typeOfObject(object) && typeof object[key] !== 'undefined' && isNoEmpty(object[key]) ? object[key] : default_value;
};

export const generateRandomInteger = (min: number = 1, max: number = 100) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateIconClass = (icon: string, type: 'rr' | 'sr' = 'rr'): string => {
	return `app-icon fi fi-${type}-${icon}`;
};
//
// export const getCount = (count: number | null | BigNumber.Value) => {
//   count = !!count ? count : 0
//   count = new BigNumber(count)
//   BigNumber.config({ FORMAT: {
//       prefix: '',
//       decimalSeparator: '.',
//       groupSeparator: ',',
//       groupSize: 3,
//       secondaryGroupSize: 0,
//       fractionGroupSeparator: ' ',
//       fractionGroupSize: 0,
//       suffix: ''
//     } })
//   return count.toFormat(0)
// }
