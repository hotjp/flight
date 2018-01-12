var ls;
(function (ls) {
	ls.GameScene = function() {
		return {
			"%22hy%22": function() { return "hy" },
			"(BOSS.HP%2F100)*200": function() { return (BOSS.HP/100)*200 },
			"hero.score": function() { return hero.score },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"hero.x": function() { return hero.x },
			"%22hx%22": function() { return "hx" },
			"%E8%8B%B1%E9%9B%84%E5%AD%90%E5%BC%B9": function() { return 英雄子弹 },
			"%22lessThan%22": function() { return "lessThan" },
			"%E8%A1%80": function() { return 血 },
			"%22score%22": function() { return "score" },
			"%22HP%22%2Bhero.HP": function() { return "HP"+hero.HP },
			"BOSS%E5%AD%90%E5%BC%B9": function() { return BOSS子弹 },
			"%22HP%22": function() { return "HP" },
			"hero.y": function() { return hero.y },
			"hero": function() { return hero },
			"40%2Bls.random()*340": function() { return 40+ls.random()*340 },
			"BOSS": function() { return BOSS },
			"%22tx%22": function() { return "tx" },
			"100%2Bls.random()*50": function() { return 100+ls.random()*50 },
			"%22greaterThan%22": function() { return "greaterThan" },
			"System.hx%2B(Touch.touchSceneX-System.tx)": function() { return System.hx+(Touch.touchSceneX-System.tx) },
			"Touch.touchSceneX": function() { return Touch.touchSceneX },
			"%E6%95%8C%E4%BA%BA%E5%AD%90%E5%BC%B9": function() { return 敌人子弹 },
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"%22ty%22": function() { return "ty" },
			"%22GameOverScene%22": function() { return "GameOverScene" },
			"System.hy%2B(Touch.touchSceneY-System.ty)": function() { return System.hy+(Touch.touchSceneY-System.ty) },
			"300%2Bls.random()*50": function() { return 300+ls.random()*50 },
			"Touch.touchSceneY": function() { return Touch.touchSceneY },
			"%22equalTo%22": function() { return "equalTo" },
			"%E6%95%8C%E4%BA%BA": function() { return 敌人 },
			"%22movetag%22": function() { return "movetag" }
		}
	};
	ls.MainScene = function() {
		return {
			"%22bounceOut%22": function() { return "bounceOut" },
			"%22tween%22": function() { return "tween" },
			"%22t1%22": function() { return "t1" },
			"%22GameScene%22": function() { return "GameScene" },
			"%22elasticOut%22": function() { return "elasticOut" }
		}
	};
	ls.GameOverScene = function() {
		return {
			"%22GameScene%22": function() { return "GameScene" },
			"%22bounceOut%22": function() { return "bounceOut" },
			"%22tween%22": function() { return "tween" }
		}
	};
})(ls || (ls = {}));