const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
//models = require( '../models');
const authSecret = require('../.env');
const Usuario = require('../models').Usuario;
const Profissao = require('../models').Profissao;
//Cadastro de usuário e login com token
router.post('/signup', function (req, res){
    if(!req.body.username || !req.body.password || !req.body.email){
        res.status(400).send({msg:'Preencha seu usuário, senha e email!'})
    }else {
        Usuario.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        .then((usuario) => res.status(201).send(usuario))
        .catch((erro) => {
            console.log(erro);
            res.status(400).send(erro);
        });
    }
});

router.post('/signin', function(req, res){
    console.log('A secret eh: '+ authSecret.authSecret);
    Usuario
            .findOne({
            where: {
                username: req.body.username
            }
        }).then((usuario) => {
            if(!usuario){
                return res.status(400).send({
                    message: 'Usuário não encontrado.'
                });
            }
            usuario.comparePassword(req.body.password, (erro, isMatch) =>{
                
                if(isMatch && !erro){
                    var token = jwt.sign(JSON.parse(JSON.stringify(usuario)), authSecret.authSecret, {expiresIn: 86400 * 30});
                    jwt.verify(token, authSecret.authSecret, function(err, data){
                        console.log(err, data)
                    })
                    res.json({success: true, token: 'Bearer '+ token});
                }else{
                    res.status(400).send({success: false, msg: 'Erro de autenticação.'})
                }
            })
        })
        .catch((error) => res.status(400).send(error));
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
        return parted[1];
        } else {
        return null;
        }
    } else {
        return null;
    }
};

//Urls protegidas
router.get('/profissao', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Profissao
        .findAll()
        .then((profissoes) => res.status(200).send(profissoes))
        .catch((error) => { res.status(400).send(error); });
    } else {
      return res.status(403).send({success: false, msg: 'Não Autorizado.'});
    }
  });
  
  router.post('/profissao', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      Profissao
        .create({
          nome: req.body.nome,
        })
        .then((profissao) => res.status(201).send(profissao))
        .catch((error) => res.status(400).send(error));
    } else {
      return res.status(403).send({success: false, msg: 'Não autorizado.'});
    }
  });

  module.exports = router;