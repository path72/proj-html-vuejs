// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 

var app = new Vue(
	{
		el: '#app',
		data: {
			references: [
				{ 
					text		: '+1 (305) 1234-5678',
					iconClass	: 'fas fa-phone-alt',
					hrefPrefix	: 'tel:',
					target		: '_self'
				},
				{ 
					text		: 'hello@example.com',
					iconClass	: 'fas fa-envelope',
					hrefPrefix	: 'mailto:',
					target		: '_self'
				},
				{
					text		: 'Main Avenue, 987',
					iconClass	: 'fas fa-map-marker-alt',
					hrefPrefix	: 'http://maps.google.com/?q=',
					target		: '_black'
				} 
			],
			pippo: 'ciccio',
			headerInfoMenu: [],
			headerMainMenu: [
				{
					entry: 'home',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'services',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'skills',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'partners',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'blog',
					activeLink: true,
					href: '',
					class: ''
				},
				{
					entry: 'get in touch',
					activeLink: true,
					href: '',
					class: 'btn btn_full txt_btn'
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
			getReference(ref) {
				return `<a href="${ref.href}"><i :class="${ref.iconClass}"></i>${ref.text}</a>`;
				
			}
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



