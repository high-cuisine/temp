import app from './configs/app.config';
import database from './configs/database.config';
import redis from './configs/redis.config';
import telegram from './configs/telegram.config';
import ton from './configs/ton.config';
import planka from './configs/planka.config';

export class cfg {

	public static get database() {
		return database();
	}

	public static get app() {
		return app();
	}

	public static get redis() {
		return redis();
	}

	public static get telegram() {
		return telegram();
	}

	public static get ton() {
		return ton();
	}

	public static get planka() {
		return planka();
	}

}
