import { IssueService } from './services/issues.service';
import { Component, OnInit } from '@angular/core';
import * as  $ from 'jquery';
import { TranslateService } from 'ng2-translate';

const defaultLanguage = "en";
const additionalLanguages = ["fr", "en"];
const languages: string[] =
	[defaultLanguage].concat(additionalLanguages);

@Component({
	selector: 'app-root',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css'],
	providers: [IssueService]
})
export class HomepageComponent implements OnInit {
	constructor(private translate: TranslateService,
		private issueServ: IssueService) {
		this.translate.setDefaultLang(defaultLanguage);
		this.translate.addLangs(additionalLanguages);

		let initLang = this.translate.getBrowserLang();
		if (languages.indexOf(initLang) === -1) {
			initLang = defaultLanguage;
		}
		this.translate.use(initLang);
	}

	name = "";
	lastName = "";
	login = "";
	question = "";
	mail = "";

	private issueClicked: boolean;

	ngOnInit() {
		this.issueClicked = false;
	}

	onName(event: any) {
	  this.name = event.target.value;
	}

	onLastName(event: any) {
		this.lastName = event.target.value;
	}

	onLogin(event: any) {
		this.login = event.target.value;
	}


	onQuestion(event: any) {
		this.question = event.target.value;
	}

	onMail(event: any) {
		this.mail = event.target.value;
	}

	clickIssue() {
		this.issueClicked = !this.issueClicked;
	}

	reportIssue(title: string, body: string) {
		return this.issueServ.reportIssue(title, body);
	}


	changeLanguage(lang) {
		this.translate.use(lang);
	}

	function($) {

		//Typed
		$(".typed").typed({
			strings: ["with an amazing design", "easy to customize"],
			typeSpeed: 100,
			backDelay: 900,
			loop: true
		});

		//Screenshots
		$('.screens').owlCarousel({
			stagePadding: 10,
			margin: 30,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				979: {
					items: 4
				}
			}
		});

		//Popup video
		$('#play-video').click(function (e) {
			e.preventDefault();

			var video_link = $(this).data('video');
			video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

			$('.work-video').append(video_link).fadeIn(200);
		});

		$('.close-video').click(function (e) {
			e.preventDefault();

			$('.work-video').fadeOut(200, function () {
				$('iframe', this).remove();
			});

		});

	}

	ngAfterViewInit() {
		!function (d, s, id) {
			var js: any,
				fjs = d.getElementsByTagName(s)[0],
				p = 'https';
			if (!d.getElementById(id)) {
				js = d.createElement(s);
				js.id = id;
				js.src = p + "://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js, fjs);
			}
		}
			(document, "script", "twitter-wjs");
	}
}
