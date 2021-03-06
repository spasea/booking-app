export default {
	option: {
		type: 'day',
		week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
		month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		format: 'DD-MM-YYYY',
		placeholder: 'Date',
		inputStyle: {
			'display': 'inline-block',
			'padding': '6px',
			'line-height': '22px',
			'font-size': '16px',
			'border': '2px solid #fff',
			'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
			'border-radius': '2px',
			'color': '#5F5F5F'
		},
		buttons: {
			ok: 'Ok',
			cancel: 'Cancel'
		},
		overlayOpacity: 0.5,
		dismissible: true
	},
}