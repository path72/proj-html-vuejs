// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 

var app = new Vue(
	{
		el: '#app',
		data: {
			references: {
				phone 	 : { 
					number: '+1 (305) 1234-5678', // tel:
					iconCLass: 'fas fa-phone-alt'
				},
				email	 : { 
					address: 'hello@example.com', // mailto: 
					iconClass: 'fas fa-envelope'
				},
				location : {
					address: 'Main Avenue, 987', // http://maps.google.com/?q=Main Avenue, 987
					iconClass: 'fas fa-map-marker-alt'
				} 
			},
			headerInfoMenu: [],
			headerMainMenu: [
				{
					entry: 'home',
					type: 'link',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'services',
					type: 'link',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'skills',
					type: 'link',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'partners',
					type: 'link',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'blog',
					type: 'link',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'get in touch',
					type: 'button',
					activeLink: true,
					href: '',
					class: ''
				},
			],
			footerLinks: [
				{
					title: 'About',
					titleClass: 'small_title txt_small_title',
					entryies: [ 
						{ text: 'The Company', href: '' },
						{ text: 'Institutional', href: '' },
						{ text: 'Social & Events', href: '' },
						{ text: 'Innovation', href: '' },
						{ text: 'Environment', href: '' },
						{ text: 'Technology', href: '' }
					],
					entryIcon: '<i class="fas fa-angle-right">'
				},
				{
					title: 'Transport',
					titleClass: 'small_title txt_small_title',
					entryies: [
						{ text: 'Industrialized', href: '' },
						{ text: 'Chemicals', href: '' },
						{ text: 'Packaged Liquids', href: '' },
						{ text: 'Construction', href: '' },
						{ text: 'Laminated Wood', href: '' },
						{ text: 'And others', href: '' }
					],
					entryIcon: '<i class="fas fa-angle-right">'
				},
				{
					title: 'Support',
					titleClass: 'small_title txt_small_title',
					entryies: [
						{ text: 'Responsibility', href: '' },
						{ text: 'Terms of Use', href: '' },
						{ text: 'About Cookies', href: '' },
						{ text: 'Privacy Policy', href: '' },
						{ text: 'Accessibility', href: '' },
						{ text: 'Information', href: '' }
					],
					entryIcon: '<i class="fas fa-angle-right">'
				}
			]
		},
		methods: {
		},
		computed: {
		},
		created() {
		},
		mounted() {
		},
		updated() {
		}
	}
);
// Vue.config.devtools = true;

// ###################################################### 
// # jQuery - DYNAMICS                                  # 
// ###################################################### 

// $(function() {
// // ********************* doc ready start ***


// // *********************** doc ready end ***
// });

// ###################################################### 
// # FUNCTIONS                                          # 
// ###################################################### 

// on scroll 
// class: header_nav gets class:fixed



