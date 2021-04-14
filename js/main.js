// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 

var app = new Vue(
	{
		el: '#app',
		data: {
			references: [
				{
					text		: 'Open Hours: Mon - Sat - 9:00 - 18:00',
					iconClass	: 'fas fa-clock',
					hrefPrefix	: '#',
					target		: '_blank'
				},
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
					target		: '_blank'
				},
				{
					text		: '',
					iconClass	: 'fab fa-facebook-f',
					hrefPrefix	: '#',
					target		: '_blank'
				},
				{
					text		: '',
					iconClass	: 'fab fa-twitter',
					hrefPrefix	: '#',
					target		: '_blank'
				},
				{
					text		: '',
					iconClass	: 'fab fa-linkedin-in',
					hrefPrefix	: '#',
					target		: '_blank'
				}
			],
			headerNavEntries: [
				{
					text: 'home',
					href: '#',
					class: ''
				},
				{
					text: 'services',
					href: '#',
					class: ''
				},
				{
					text: 'skills',
					href: '#',
					class: ''
				},
				{
					text: 'partners',
					href: '#',
					class: ''
				},
				{
					text: 'blog',
					href: '#',
					class: ''
				},
				{
					text: 'get in touch',
					href: '#',
					class: 'btn btn_full txt_btn'
				},
			],
			footerMenus: [
				{
					title: 'About',
					titleClass: 'small_title txt_small_title',
					links: [ 
						{ text: 'The Company', href: '#' },
						{ text: 'Institutional', href: '#' },
						{ text: 'Social & Events', href: '#' },
						{ text: 'Innovation', href: 'https://www.phibbi.com/generatore/stronzate-web-economy/' },
						{ text: 'Environment', href: '#' },
						{ text: 'Technology', href: '#' }
					],
					linkIconClass: 'fas fa-angle-right'
				},
				{
					title: 'Transport',
					titleClass: 'small_title txt_small_title',
					links: [
						{ text: 'Industrialized', href: '#' },
						{ text: 'Chemicals', href: '#' },
						{ text: 'Packaged Liquids', href: '#' },
						{ text: 'Construction', href: '#' },
						{ text: 'Laminated Wood', href: '#' },
						{ text: 'And others', href: '#' }
					],
					linkIconClass: 'fas fa-angle-right'
				},
				{
					title: 'Support',
					titleClass: 'small_title txt_small_title',
					links: [
						{ text: 'Responsibility', href: '#' },
						{ text: 'Terms of Use', href: '#' },
						{ text: 'About Cookies', href: '#' },
						{ text: 'Privacy Policy', href: '#' },
						{ text: 'Accessibility', href: '#' },
						{ text: 'Information', href: '#' }
					],
					linkIconClass: 'fas fa-angle-right'
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
		},
		components: {
			'references': {
				/**
				 * 	<references :list-"references" :select="[0,1,2,3]"></references>
				 */
				props: ['list','select'],
				template: `
				<ul>
					<li v-for="(ref,index) in list" v-if="select.includes(index)">
						<a :href="ref.hrefPrefix+ref.text" :target="ref.target"><i :class="ref.iconClass"></i>{{ref.text}}</a>
					</li>
				</ul>
				`
			}
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



