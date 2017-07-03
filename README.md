React 배워보기
=============

## React 개발 환경 구축하기.

### 1. Node.js 설치

### 2. MongoDB 설치

### 3. 프로젝트 폴더 생성

```shell
    > mkdir react-fundanmentals
    > cd react-fundanmentals
    > npm init
```

### 4. 관련 패키지 설치
```js
    {
        "name": "react-fundamentals",
        "version": "0.0.1",
        "description": "react 어플리케이션",
        "main": "index.js",
        "scripts": {
            "build": "webpack",
            "dev-server": "webpack-dev-server"
        },
        "keywords": [ "React.js", "Express", "Node.js", "MongoDB"],
        "author": "",
        "license": "MIT",
        "dependencies": {
            "react": "^15.6.1",
            "react-dom": "^15.6.1"
        },
        "devDependencies": {
            "babel": "^6.23.0",
            "babel-cli": "^6.24.1",
            "babel-core": "^6.25.0",
            "babel-loader": "^7.1.1",
            "babel-preset-es2015": "^6.24.1",
            "babel-preset-react": "^6.24.1",
            "react-hot-loader": "^1.3.1",
            "webpack": "^1.15.0",
            "webpack-dev-server": "^1.16.5"
        }
        // 패키지 버전영향이 커서 이데로 설치하여야 한다.
    }
```

    - 패키지 설정파일 수정 후 일괄 설치한다.

```shell
    > npm install
```
