// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 

var app = new Vue(
	{
		el: '#app',
		data: {
			references: [
				{
					name		: 'opening',
					text		: 'Open Hours: Mon - Sat - 9:00 - 18:00',
					iconClass	: 'fas fa-clock',
					href		: '#',
					target		: '_self'
				},
				{ 
					name		: 'phone',
					text		: '+1 (305) 1234-5678',
					iconClass	: 'fas fa-phone-alt',
					href		: 'tel:+1 (305) 1234-5678',
					target		: '_self'
				},
				{ 
					name		: 'email',
					text		: 'hello@example.com',
					iconClass	: 'fas fa-envelope',
					href		: 'mailto:hello@example.com',
					target		: '_self'
				},
				{
					name		: 'address',
					text		: 'Main Avenue, 987',
					iconClass	: 'fas fa-map-marker-alt',
					href		: 'http://maps.google.com/?q=Main Avenue, 987',
					target		: '_blank'
				},
				{
					name		: 'fb',
					text		: '',
					iconClass	: 'fab fa-facebook-f',
					href		: 'https://www.facebook.com/capatonda',
					target		: '_blank'
				},
				{
					name		: 'tw',
					text		: '',
					iconClass	: 'fab fa-twitter',
					href		: 'https://twitter.com/marciocapatonda',
					target		: '_blank'
				},
				{
					name		: 'li',
					text		: '',
					iconClass	: 'fab fa-linkedin-in',
					href		: 'https://www.linkedin.com/in/capatonda-maccio-32178211b',
					target		: '_blank'
				}
			],
			headerNavEntries: [
				{
					text	: 'home',
					href	: '#',
					class	: ''
				},
				{
					text	: 'services',
					href	: '#services',
					class	: ''
				},
				{
					text	: 'skills',
					href	: '#skills',
					class	: ''
				},
				{
					text	: 'partners',
					href	: '#partners',
					class	: ''
				},
				{
					text	: 'blog',
					href	: '#blog',
					class	: ''
				},
				{
					text	: 'get in touch',
					href	: '#contact',
					class	: 'btn btn_full txt_btn'
				},
			],
			footerMenus: [
				{
					title		: 'About',
					titleClass	: 'small_title txt_small_title',
					links: [	
						{ text: 'The Company',		href: '#', target: '' },
						{ text: 'Institutional',	href: '#', target: '' },
						{ text: 'Social & Events',	href: '#', target: '' },
						{ text: 'Innovation',		href: 'https://www.phibbi.com/generatore/stronzate-web-economy/', target: '_blank' },
						{ text: 'Environment',		href: '#', target: '' },
						{ text: 'Technology',		href: '#', target: '' }
					],
					linkIconClass: 'fas fa-angle-right'
				},
				{
					title		: 'Transport',
					titleClass	: 'small_title txt_small_title',
					links: [
						{ text: 'Industrialized',	href: '#', target: '' },
						{ text: 'Chemicals',		href: '#', target: '' },
						{ text: 'Packaged Liquids',	href: '#', target: '' },
						{ text: 'Construction',		href: '#', target: '' },
						{ text: 'Laminated Wood',	href: '#', target: '' },
						{ text: 'And others',		href: '#', target: '' }
					],
					linkIconClass: 'fas fa-angle-right'
				},
				{
					title		: 'Support',
					titleClass	: 'small_title txt_small_title',
					links: [
						{ text: 'Responsibility',	href: '#', target: '' },
						{ text: 'Terms of Use',		href: '#', target: '' },
						{ text: 'About Cookies',	href: '#', target: '' },
						{ text: 'Privacy Policy',	href: '#', target: '' },
						{ text: 'Accessibility',	href: '#', target: '' },
						{ text: 'Information',		href: '#', target: '' }
					],
					linkIconClass: 'fas fa-angle-right'
				}
			]
		},
		methods: {
			getReferenceByName(name) {
				return this.references.filter((ref) => ref.name == name )[0];
			}
		},
		computed: {
		},
		created() {
		},
		mounted() {
			let headerNav = document.getElementsByClassName('header_nav')[0];
			window.onscroll = (e) => {
				if (window.scrollY > 50)
					headerNav.className += " fixed";
				else
					headerNav.className = "header_nav";
			}
		},
		updated() {
		},
		components: {
			'references': {
				/**
				 * 	<references :list="references" :select="[name1,name2,...]"></references>
				 */
				props: ['list','select'],
				template: `
				<ul>
					<li v-for="(ref,index) in list" v-if="select.includes(ref.name)">
						<a :href="ref.href" :target="ref.target"><i :class="ref.iconClass"></i>{{ref.text}}</a>
					</li>
				</ul>
				`
			}
		}
	}
);
// Vue.config.devtools = true;

