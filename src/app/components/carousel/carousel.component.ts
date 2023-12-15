import {AfterViewInit, Component, OnDestroy} from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnDestroy, AfterViewInit {
	private timer?: any;

	background = true;
	gallery: string[] = [
		'/assets/gallery/sign.jpg',
		'/assets/gallery/0e2343c77df8a7a889ac415c8e7a7e21.jpg',
		'/assets/gallery/2a291f871aa431321815427bd0da7b47.jpg',
		'/assets/gallery/3daf84c720d7cc1a1cee552ed8aaa950.png',
		'/assets/gallery/005aaf842df485a2aa84cdf1126b3b99.jpg',
		'/assets/gallery/29b2858c929dad50084105625c1fdb42.jpg',
		'/assets/gallery/47ac8b23a14218a2d34c1e18aae21294.png',
		'/assets/gallery/53be6420ddf84d8b03a23150f019244b.jpg',
		'/assets/gallery/64d63ff7fabb405e8dfc828a99ac5624.jpg',
		'/assets/gallery/65cd4315aa7657a49801b9295cdae2c3.jpg',
		'/assets/gallery/94ded0778bb59e7e0bf88f6dc888ef4c.jpg',
		'/assets/gallery/845ee7532bd7d36722961fb323bfa1dd.jpg',
		'/assets/gallery/976d7cb341f7cec8744b622564a47f39.jpg',
		'/assets/gallery/1661a1bb4e41da05e0ed5a6a5392e65a.jpg',
		'/assets/gallery/419966f0afc5e2304e7d0356cd9ebcd0.jpg',
		'/assets/gallery/509028fb06297b1265e4fe411db6aa02.jpg',
		'/assets/gallery/a9c0fd0475a0668048c650847d01d89a.jpg',
		'/assets/gallery/ac030ea1880bad81fb310963f260879c.jpg',
		'/assets/gallery/ac719df5a9c457b7681f03563135867d.jpg',
		'/assets/gallery/b0fb7922a80370e24cc556278937f368.jpg',
		'/assets/gallery/b07494f26cafee254851a171cdfcea39.jpg',
		'/assets/gallery/bf0f928b4c1e91c0c6c06ea8e61412cf.jpg',
		'/assets/gallery/de3817da3a00e0706a73e6385a9aa361.jpg',
		'/assets/gallery/dfa230c49c1c737ffdaf46875431212c.jpg',
		'/assets/gallery/e2d1fd95e5a6c36a83b7fc602419b8c6.jpg',
		'/assets/gallery/e312d84b034d5fd307a5e4b48ac7fead.jpg',
		'/assets/gallery/f851220bb22cf91b4041695d930c3af0.jpg',
	];
	speed = 5000;
	pause = false;
	index = 0 ?? ~~(Math.random() * this.gallery.length);
	height = '300px';

	ngAfterViewInit() {
		this.timer = setInterval(() => {
			if(!this.pause) this.next(false);
		}, this.speed);
	}

	ngOnDestroy() {
		if(this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	next(pause = true) {
		this.pause = pause;
		this.index++;
		if(this.index >= this.gallery.length) this.index = 0;
	}

	previous(pause = true) {
		this.pause = pause;
		this.index = this.index > 0 ? this.index - 1 : this.gallery.length - 1;
	}
}
