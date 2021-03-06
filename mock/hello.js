/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`{
    "sexList": [
        {
            "id": 1,
            "name": "男"
        },
        {
            "id": 2,
            "name": "女"
        },
        {
            "id": 3,
            "name": "未知"
        }
    ],
    "maritalStatusList": [],
    "specimenSituationList": [
        {
            "isDelete": false,
            "name": "合格",
            "sort": 1,
            "specimenSituationId": 1
        },
        {
            "isDelete": false,
            "name": "不合格",
            "sort": 2,
            "specimenSituationId": 2
        }
    ],
    "inspectDepartmentList": [
        {
            "id": 4,
            "inspectDepartmentId": 4,
            "isDelete": false,
            "name": "妇科门诊",
            "sort": 4
        },
        {
            "id": 5,
            "inspectDepartmentId": 5,
            "isDelete": false,
            "name": "外科门诊",
            "sort": 5
        },
        {
            "id": 6,
            "inspectDepartmentId": 6,
            "isDelete": false,
            "name": "内科门诊",
            "sort": 6
        },
        {
            "id": 7,
            "inspectDepartmentId": 7,
            "isDelete": false,
            "name": "内镜诊疗部",
            "sort": 7
        },
        {
            "id": 8,
            "inspectDepartmentId": 8,
            "isDelete": false,
            "name": "眼科门诊",
            "sort": 8
        },
        {
            "id": 9,
            "inspectDepartmentId": 9,
            "isDelete": false,
            "name": "耳鼻咽喉科门诊",
            "sort": 9
        },
        {
            "id": 10,
            "inspectDepartmentId": 10,
            "isDelete": false,
            "name": "口腔",
            "sort": 10
        },
        {
            "id": 11,
            "inspectDepartmentId": 11,
            "isDelete": false,
            "name": "皮肤性病科病区",
            "sort": 11
        },
        {
            "id": 12,
            "inspectDepartmentId": 12,
            "isDelete": false,
            "name": "烧伤整形康复中心",
            "sort": 12
        },
        {
            "id": 13,
            "inspectDepartmentId": 13,
            "isDelete": false,
            "name": "综合内科病房(西)",
            "sort": 13
        },
        {
            "id": 14,
            "inspectDepartmentId": 14,
            "isDelete": false,
            "name": "血液内科一病区",
            "sort": 14
        },
        {
            "id": 15,
            "inspectDepartmentId": 15,
            "isDelete": false,
            "name": "血液内科二病区",
            "sort": 15
        },
        {
            "id": 16,
            "inspectDepartmentId": 16,
            "isDelete": false,
            "name": "新生儿病区",
            "sort": 16
        },
        {
            "id": 17,
            "inspectDepartmentId": 17,
            "isDelete": false,
            "name": "心研所心胸外科",
            "sort": 17
        },
        {
            "id": 18,
            "inspectDepartmentId": 18,
            "isDelete": false,
            "name": "小儿外科病区",
            "sort": 18
        },
        {
            "id": 19,
            "inspectDepartmentId": 19,
            "isDelete": false,
            "name": "儿科一病区",
            "sort": 19
        },
        {
            "id": 20,
            "inspectDepartmentId": 20,
            "isDelete": false,
            "name": "儿科二病区",
            "sort": 20
        },
        {
            "id": 21,
            "inspectDepartmentId": 21,
            "isDelete": false,
            "name": "儿科三病区",
            "sort": 21
        },
        {
            "id": 22,
            "inspectDepartmentId": 22,
            "isDelete": false,
            "name": "消化内科病区",
            "sort": 22
        },
        {
            "id": 23,
            "inspectDepartmentId": 23,
            "isDelete": false,
            "name": "老年病学消化内科病区",
            "sort": 23
        },
        {
            "id": 24,
            "inspectDepartmentId": 24,
            "isDelete": false,
            "name": "肾内科病区",
            "sort": 24
        },
        {
            "id": 25,
            "inspectDepartmentId": 25,
            "isDelete": false,
            "name": "肾移植病区",
            "sort": 25
        },
        {
            "id": 26,
            "inspectDepartmentId": 26,
            "isDelete": false,
            "name": "神经外科一病区",
            "sort": 26
        },
        {
            "id": 27,
            "inspectDepartmentId": 27,
            "isDelete": false,
            "name": "神经外科二病区",
            "sort": 27
        },
        {
            "id": 28,
            "inspectDepartmentId": 28,
            "isDelete": false,
            "name": "神经内科一病区",
            "sort": 28
        },
        {
            "id": 29,
            "inspectDepartmentId": 29,
            "isDelete": false,
            "name": "神经内科二病区",
            "sort": 29
        },
        {
            "id": 30,
            "inspectDepartmentId": 30,
            "isDelete": false,
            "name": "泌尿外科病区",
            "sort": 30
        },
        {
            "id": 31,
            "inspectDepartmentId": 31,
            "isDelete": false,
            "name": "内分泌病区",
            "sort": 31
        },
        {
            "id": 32,
            "inspectDepartmentId": 32,
            "isDelete": false,
            "name": "老年病学呼吸内科病区",
            "sort": 32
        },
        {
            "id": 33,
            "inspectDepartmentId": 33,
            "isDelete": false,
            "name": "结直肠肛门外科病区",
            "sort": 33
        },
        {
            "id": 34,
            "inspectDepartmentId": 34,
            "isDelete": false,
            "name": "计划生育病区",
            "sort": 34
        },
        {
            "id": 35,
            "inspectDepartmentId": 35,
            "isDelete": false,
            "name": "脊柱骨病外科二病区",
            "sort": 35
        },
        {
            "id": 36,
            "inspectDepartmentId": 36,
            "isDelete": false,
            "name": "呼吸疾病研究所一病区",
            "sort": 36
        },
        {
            "id": 37,
            "inspectDepartmentId": 37,
            "isDelete": false,
            "name": "呼吸疾病研究所二病区",
            "sort": 37
        },
        {
            "id": 38,
            "inspectDepartmentId": 38,
            "isDelete": false,
            "name": "呼吸疾病研究所三病区",
            "sort": 38
        },
        {
            "id": 39,
            "inspectDepartmentId": 39,
            "isDelete": false,
            "name": "核医学科病区",
            "sort": 39
        },
        {
            "id": 40,
            "inspectDepartmentId": 40,
            "isDelete": false,
            "name": "肝移植病区",
            "sort": 40
        },
        {
            "id": 41,
            "inspectDepartmentId": 41,
            "isDelete": false,
            "name": "妇科病区",
            "sort": 41
        },
        {
            "id": 42,
            "inspectDepartmentId": 42,
            "isDelete": false,
            "name": "产科病区",
            "sort": 42
        },
        {
            "id": 43,
            "inspectDepartmentId": 43,
            "isDelete": false,
            "name": "耳鼻咽喉科一病区",
            "sort": 43
        },
        {
            "id": 44,
            "inspectDepartmentId": 44,
            "isDelete": false,
            "name": "耳鼻咽喉科二病区",
            "sort": 44
        },
        {
            "id": 45,
            "inspectDepartmentId": 45,
            "isDelete": false,
            "name": "PICU",
            "sort": 45
        },
        {
            "id": 46,
            "inspectDepartmentId": 46,
            "isDelete": false,
            "name": "老年病学神经内科病区",
            "sort": 46
        },
        {
            "id": 47,
            "inspectDepartmentId": 47,
            "isDelete": false,
            "name": "危重症监护中心二病区",
            "sort": 47
        },
        {
            "id": 48,
            "inspectDepartmentId": 48,
            "isDelete": false,
            "name": "危重症监护中心一病区",
            "sort": 48
        },
        {
            "id": 49,
            "inspectDepartmentId": 49,
            "isDelete": false,
            "name": "心血管研究所内科一病区",
            "sort": 49
        },
        {
            "id": 50,
            "inspectDepartmentId": 50,
            "isDelete": false,
            "name": "心血管研究所内科二病区",
            "sort": 50
        },
        {
            "id": 51,
            "inspectDepartmentId": 51,
            "isDelete": false,
            "name": "心研所CCU",
            "sort": 51
        },
        {
            "id": 52,
            "inspectDepartmentId": 52,
            "isDelete": false,
            "name": "创伤骨科中心(西)",
            "sort": 52
        },
        {
            "id": 53,
            "inspectDepartmentId": 53,
            "isDelete": false,
            "name": "化疗科",
            "sort": 53
        },
        {
            "id": 54,
            "inspectDepartmentId": 54,
            "isDelete": false,
            "name": "微创外科中心(西)",
            "sort": 54
        },
        {
            "id": 55,
            "inspectDepartmentId": 55,
            "isDelete": false,
            "name": "妇产科（西）",
            "sort": 55
        },
        {
            "id": 56,
            "inspectDepartmentId": 56,
            "isDelete": false,
            "name": "风湿免疫科(西)",
            "sort": 56
        },
        {
            "id": 57,
            "inspectDepartmentId": 57,
            "isDelete": false,
            "name": "代谢糖尿中心(西)",
            "sort": 57
        },
        {
            "id": 58,
            "inspectDepartmentId": 58,
            "isDelete": false,
            "name": "放疗科一病区(西)",
            "sort": 58
        },
        {
            "id": 59,
            "inspectDepartmentId": 59,
            "isDelete": false,
            "name": "ICU(西)",
            "sort": 59
        }
    ],
    "sampleDoctorList": [],
    "unqualifiedCauseList": [
        {
            "code": "",
            "isDelete": false,
            "name": "患者基本信息有错误",
            "sort": 1,
            "unqualifiedCauseId": 5
        },
        {
            "isDelete": false,
            "name": "申请单与组织标本袋信息不一致",
            "sort": 2,
            "unqualifiedCauseId": 8
        }
    ],
    "nationList": [
        {
            "id": 0,
            "isDelete": false,
            "name": "汉族",
            "nationId": 1,
            "sort": 1
        },
        {
            "id": 0,
            "isDelete": false,
            "name": "汉族",
            "nationId": 2,
            "sort": 2
        }
    ],
    "professionList": [],
    "specimenNameList": [
        {
            "id": 1,
            "level": 1,
            "name": "阑尾",
            "nodeList": [
                {
                    "id": 2,
                    "level": 2,
                    "name": "阑尾",
                    "nodeList": []
                },
                {
                    "id": 3,
                    "level": 2,
                    "name": "fdsfsd",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 4,
            "level": 1,
            "name": "胆囊",
            "nodeList": [
                {
                    "id": 5,
                    "level": 2,
                    "name": "胆囊.",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 6,
            "level": 1,
            "name": "胃",
            "nodeList": [
                {
                    "id": 7,
                    "level": 2,
                    "name": "幽门",
                    "nodeList": []
                },
                {
                    "id": 8,
                    "level": 2,
                    "name": "十二指肠球部",
                    "nodeList": []
                },
                {
                    "id": 9,
                    "level": 2,
                    "name": "胃窦大弯胎盘",
                    "nodeList": []
                },
                {
                    "id": 10,
                    "level": 2,
                    "name": "胃体大弯",
                    "nodeList": []
                },
                {
                    "id": 11,
                    "level": 2,
                    "name": "胃窦小弯",
                    "nodeList": []
                },
                {
                    "id": 12,
                    "level": 2,
                    "name": "贲门",
                    "nodeList": []
                },
                {
                    "id": 13,
                    "level": 2,
                    "name": "胃窦小弯",
                    "nodeList": []
                },
                {
                    "id": 14,
                    "level": 2,
                    "name": "胃窦大弯",
                    "nodeList": []
                },
                {
                    "id": 15,
                    "level": 2,
                    "name": "胃窦，胃角，胃底",
                    "nodeList": []
                },
                {
                    "id": 16,
                    "level": 2,
                    "name": "胃窦小弯，胃角",
                    "nodeList": []
                },
                {
                    "id": 17,
                    "level": 2,
                    "name": "胃粘膜",
                    "nodeList": []
                },
                {
                    "id": 18,
                    "level": 2,
                    "name": "胃大部",
                    "nodeList": []
                },
                {
                    "id": 19,
                    "level": 2,
                    "name": "次切胃",
                    "nodeList": []
                },
                {
                    "id": 20,
                    "level": 2,
                    "name": "胃体",
                    "nodeList": []
                },
                {
                    "id": 21,
                    "level": 2,
                    "name": "胃小弯",
                    "nodeList": []
                },
                {
                    "id": 22,
                    "level": 2,
                    "name": "胃大弯",
                    "nodeList": []
                },
                {
                    "id": 23,
                    "level": 2,
                    "name": "胃窦",
                    "nodeList": []
                },
                {
                    "id": 24,
                    "level": 2,
                    "name": "全胃",
                    "nodeList": []
                },
                {
                    "id": 25,
                    "level": 2,
                    "name": "胃窦，食道",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 26,
            "level": 1,
            "name": "食道",
            "nodeList": [
                {
                    "id": 27,
                    "level": 2,
                    "name": "食道上段",
                    "nodeList": []
                },
                {
                    "id": 28,
                    "level": 2,
                    "name": "食道中下段",
                    "nodeList": []
                },
                {
                    "id": 29,
                    "level": 2,
                    "name": "食道中段",
                    "nodeList": []
                },
                {
                    "id": 30,
                    "level": 2,
                    "name": "食道下段",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 31,
            "level": 1,
            "name": "肠",
            "nodeList": [
                {
                    "id": 32,
                    "level": 2,
                    "name": "肛门肿物",
                    "nodeList": []
                },
                {
                    "id": 33,
                    "level": 2,
                    "name": "大肠",
                    "nodeList": []
                },
                {
                    "id": 34,
                    "level": 2,
                    "name": "小肠",
                    "nodeList": []
                },
                {
                    "id": 35,
                    "level": 2,
                    "name": "盲肠",
                    "nodeList": []
                },
                {
                    "id": 36,
                    "level": 2,
                    "name": "十二指肠",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 37,
            "level": 1,
            "name": "颈部甲状腺",
            "nodeList": [
                {
                    "id": 38,
                    "level": 2,
                    "name": "左侧",
                    "nodeList": []
                },
                {
                    "id": 39,
                    "level": 2,
                    "name": "峡部",
                    "nodeList": []
                },
                {
                    "id": 40,
                    "level": 2,
                    "name": "右侧",
                    "nodeList": []
                },
                {
                    "id": 41,
                    "level": 2,
                    "name": "双侧",
                    "nodeList": []
                },
                {
                    "id": 42,
                    "level": 2,
                    "name": "甲状腺",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 43,
            "level": 1,
            "name": "淋巴结",
            "nodeList": [
                {
                    "id": 44,
                    "level": 2,
                    "name": "骨髓",
                    "nodeList": []
                },
                {
                    "id": 45,
                    "level": 2,
                    "name": "腹股沟淋巴结",
                    "nodeList": []
                },
                {
                    "id": 46,
                    "level": 2,
                    "name": "颈淋巴结",
                    "nodeList": []
                },
                {
                    "id": 47,
                    "level": 2,
                    "name": "左",
                    "nodeList": []
                },
                {
                    "id": 48,
                    "level": 2,
                    "name": "左腋下淋巴结穿刺",
                    "nodeList": []
                },
                {
                    "id": 49,
                    "level": 2,
                    "name": "右",
                    "nodeList": []
                },
                {
                    "id": 50,
                    "level": 2,
                    "name": "腋淋巴结",
                    "nodeList": []
                },
                {
                    "id": 51,
                    "level": 2,
                    "name": "锁骨上淋巴结",
                    "nodeList": []
                },
                {
                    "id": 52,
                    "level": 2,
                    "name": "淋巴结",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 53,
            "level": 1,
            "name": "乳腺",
            "nodeList": [
                {
                    "id": 54,
                    "level": 2,
                    "name": "双侧乳房",
                    "nodeList": []
                },
                {
                    "id": 55,
                    "level": 2,
                    "name": "右乳房",
                    "nodeList": []
                },
                {
                    "id": 56,
                    "level": 2,
                    "name": "右乳腺",
                    "nodeList": []
                },
                {
                    "id": 57,
                    "level": 2,
                    "name": "左乳房",
                    "nodeList": []
                },
                {
                    "id": 58,
                    "level": 2,
                    "name": "左腋下",
                    "nodeList": []
                },
                {
                    "id": 59,
                    "level": 2,
                    "name": "右腋下",
                    "nodeList": []
                },
                {
                    "id": 60,
                    "level": 2,
                    "name": "单纯切除乳房",
                    "nodeList": []
                },
                {
                    "id": 61,
                    "level": 2,
                    "name": "乳房肿块",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 62,
            "level": 1,
            "name": "骨外",
            "nodeList": [
                {
                    "id": 63,
                    "level": 2,
                    "name": "腿骨",
                    "nodeList": []
                },
                {
                    "id": 64,
                    "level": 2,
                    "name": "膝关节",
                    "nodeList": []
                },
                {
                    "id": 65,
                    "level": 2,
                    "name": "腕关节",
                    "nodeList": []
                },
                {
                    "id": 66,
                    "level": 2,
                    "name": "软骨",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 67,
            "level": 1,
            "name": "脑外",
            "nodeList": [
                {
                    "id": 68,
                    "level": 2,
                    "name": "颞叶",
                    "nodeList": []
                },
                {
                    "id": 69,
                    "level": 2,
                    "name": "枕叶",
                    "nodeList": []
                },
                {
                    "id": 70,
                    "level": 2,
                    "name": "小脑",
                    "nodeList": []
                },
                {
                    "id": 71,
                    "level": 2,
                    "name": "脑肿瘤",
                    "nodeList": []
                },
                {
                    "id": 72,
                    "level": 2,
                    "name": "蝶鞍部肿块",
                    "nodeList": []
                },
                {
                    "id": 73,
                    "level": 2,
                    "name": "畸形血管团",
                    "nodeList": []
                },
                {
                    "id": 74,
                    "level": 2,
                    "name": "额部",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 75,
            "level": 1,
            "name": "泌尿系统",
            "nodeList": [
                {
                    "id": 76,
                    "level": 2,
                    "name": "左",
                    "nodeList": []
                },
                {
                    "id": 77,
                    "level": 2,
                    "name": "肾",
                    "nodeList": []
                },
                {
                    "id": 78,
                    "level": 2,
                    "name": "肾上腺肿块",
                    "nodeList": []
                },
                {
                    "id": 79,
                    "level": 2,
                    "name": "尿道",
                    "nodeList": []
                },
                {
                    "id": 80,
                    "level": 2,
                    "name": "输尿管",
                    "nodeList": []
                },
                {
                    "id": 81,
                    "level": 2,
                    "name": "右",
                    "nodeList": []
                },
                {
                    "id": 82,
                    "level": 2,
                    "name": "膀胱",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 83,
            "level": 1,
            "name": "女性生殖系统",
            "nodeList": [
                {
                    "id": 84,
                    "level": 2,
                    "name": "附件肿块",
                    "nodeList": []
                },
                {
                    "id": 85,
                    "level": 2,
                    "name": "宫颈赘生物",
                    "nodeList": []
                },
                {
                    "id": 86,
                    "level": 2,
                    "name": "卵巢肿瘤",
                    "nodeList": []
                },
                {
                    "id": 87,
                    "level": 2,
                    "name": "全子宫",
                    "nodeList": []
                },
                {
                    "id": 88,
                    "level": 2,
                    "name": "次子宫",
                    "nodeList": []
                },
                {
                    "id": 89,
                    "level": 2,
                    "name": "宫内物",
                    "nodeList": []
                },
                {
                    "id": 90,
                    "level": 2,
                    "name": "全子宫及一侧附件",
                    "nodeList": []
                },
                {
                    "id": 91,
                    "level": 2,
                    "name": "子宫肿块",
                    "nodeList": []
                },
                {
                    "id": 92,
                    "level": 2,
                    "name": "输卵管",
                    "nodeList": []
                },
                {
                    "id": 93,
                    "level": 2,
                    "name": "右卵巢",
                    "nodeList": []
                },
                {
                    "id": 94,
                    "level": 2,
                    "name": "左卵巢",
                    "nodeList": []
                },
                {
                    "id": 95,
                    "level": 2,
                    "name": "双侧卵巢",
                    "nodeList": []
                },
                {
                    "id": 96,
                    "level": 2,
                    "name": "左附件",
                    "nodeList": []
                },
                {
                    "id": 97,
                    "level": 2,
                    "name": "右附件",
                    "nodeList": []
                },
                {
                    "id": 98,
                    "level": 2,
                    "name": "双侧附件",
                    "nodeList": []
                },
                {
                    "id": 99,
                    "level": 2,
                    "name": "右侧输卵管",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 100,
            "level": 1,
            "name": "肾脏",
            "nodeList": [
                {
                    "id": 101,
                    "level": 2,
                    "name": "左肾",
                    "nodeList": []
                },
                {
                    "id": 102,
                    "level": 2,
                    "name": "右肾",
                    "nodeList": []
                },
                {
                    "id": 103,
                    "level": 2,
                    "name": "肾及输尿管",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 104,
            "level": 1,
            "name": "呼吸系统",
            "nodeList": [
                {
                    "id": 105,
                    "level": 2,
                    "name": "声带新生物",
                    "nodeList": []
                },
                {
                    "id": 106,
                    "level": 2,
                    "name": "喉新生物",
                    "nodeList": []
                },
                {
                    "id": 107,
                    "level": 2,
                    "name": "右肺",
                    "nodeList": []
                },
                {
                    "id": 108,
                    "level": 2,
                    "name": "左肺",
                    "nodeList": []
                },
                {
                    "id": 109,
                    "level": 2,
                    "name": "鼻咽部粘膜",
                    "nodeList": []
                },
                {
                    "id": 110,
                    "level": 2,
                    "name": "声带前联合",
                    "nodeList": []
                },
                {
                    "id": 111,
                    "level": 2,
                    "name": "上颌窦新生物",
                    "nodeList": []
                },
                {
                    "id": 112,
                    "level": 2,
                    "name": "右甲状腺",
                    "nodeList": []
                },
                {
                    "id": 113,
                    "level": 2,
                    "name": "右鼻腔新生物",
                    "nodeList": []
                },
                {
                    "id": 114,
                    "level": 2,
                    "name": "下鼻甲",
                    "nodeList": []
                },
                {
                    "id": 115,
                    "level": 2,
                    "name": "鼻咽部",
                    "nodeList": []
                },
                {
                    "id": 116,
                    "level": 2,
                    "name": "右声带",
                    "nodeList": []
                },
                {
                    "id": 117,
                    "level": 2,
                    "name": "筛窦新生物",
                    "nodeList": []
                },
                {
                    "id": 118,
                    "level": 2,
                    "name": "右鼻前庭",
                    "nodeList": []
                },
                {
                    "id": 119,
                    "level": 2,
                    "name": "左下叶支气管口",
                    "nodeList": []
                },
                {
                    "id": 120,
                    "level": 2,
                    "name": "腺样体",
                    "nodeList": []
                },
                {
                    "id": 121,
                    "level": 2,
                    "name": "额部",
                    "nodeList": []
                },
                {
                    "id": 122,
                    "level": 2,
                    "name": "双扁桃体",
                    "nodeList": []
                },
                {
                    "id": 123,
                    "level": 2,
                    "name": "右上颌窦",
                    "nodeList": []
                },
                {
                    "id": 124,
                    "level": 2,
                    "name": "右上颌窦新生物",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 125,
            "level": 1,
            "name": "腮腺",
            "nodeList": [
                {
                    "id": 126,
                    "level": 2,
                    "name": "腮腺肿块",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 127,
            "level": 1,
            "name": "肝脏",
            "nodeList": [
                {
                    "id": 128,
                    "level": 2,
                    "name": "肝穿刺",
                    "nodeList": []
                },
                {
                    "id": 129,
                    "level": 2,
                    "name": "肝组织",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 130,
            "level": 1,
            "name": "前列腺",
            "nodeList": [
                {
                    "id": 131,
                    "level": 2,
                    "name": "前列腺",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 132,
            "level": 1,
            "name": "皮肤软组织",
            "nodeList": [
                {
                    "id": 133,
                    "level": 2,
                    "name": "大 小腿",
                    "nodeList": []
                },
                {
                    "id": 134,
                    "level": 2,
                    "name": "胸部 背部",
                    "nodeList": []
                },
                {
                    "id": 135,
                    "level": 2,
                    "name": "腹膜后肿块",
                    "nodeList": []
                },
                {
                    "id": 136,
                    "level": 2,
                    "name": "皮肤肿块",
                    "nodeList": []
                },
                {
                    "id": 137,
                    "level": 2,
                    "name": "颈部",
                    "nodeList": []
                },
                {
                    "id": 138,
                    "level": 2,
                    "name": "皮下组织",
                    "nodeList": []
                },
                {
                    "id": 139,
                    "level": 2,
                    "name": "左",
                    "nodeList": []
                },
                {
                    "id": 140,
                    "level": 2,
                    "name": "面部",
                    "nodeList": []
                },
                {
                    "id": 141,
                    "level": 2,
                    "name": "腹部",
                    "nodeList": []
                },
                {
                    "id": 142,
                    "level": 2,
                    "name": "右",
                    "nodeList": []
                },
                {
                    "id": 143,
                    "level": 2,
                    "name": "双侧腘窝",
                    "nodeList": []
                },
                {
                    "id": 144,
                    "level": 2,
                    "name": "头顶部皮肤",
                    "nodeList": []
                },
                {
                    "id": 145,
                    "level": 2,
                    "name": "右头皮肿块",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 146,
            "level": 1,
            "name": "中枢神经",
            "nodeList": [
                {
                    "id": 147,
                    "level": 2,
                    "name": "第三脑室",
                    "nodeList": []
                },
                {
                    "id": 148,
                    "level": 2,
                    "name": "小脑",
                    "nodeList": []
                },
                {
                    "id": 149,
                    "level": 2,
                    "name": "枕叶",
                    "nodeList": []
                },
                {
                    "id": 150,
                    "level": 2,
                    "name": "颞叶",
                    "nodeList": []
                },
                {
                    "id": 151,
                    "level": 2,
                    "name": "额叶",
                    "nodeList": []
                },
                {
                    "id": 152,
                    "level": 2,
                    "name": "鞍区",
                    "nodeList": []
                },
                {
                    "id": 153,
                    "level": 2,
                    "name": "脑干",
                    "nodeList": []
                },
                {
                    "id": 154,
                    "level": 2,
                    "name": "右额顶叶",
                    "nodeList": []
                },
                {
                    "id": 155,
                    "level": 2,
                    "name": "顶叶",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 156,
            "level": 1,
            "name": "肢体",
            "nodeList": [
                {
                    "id": 157,
                    "level": 2,
                    "name": "左",
                    "nodeList": []
                },
                {
                    "id": 158,
                    "level": 2,
                    "name": "胸壁",
                    "nodeList": []
                },
                {
                    "id": 159,
                    "level": 2,
                    "name": "肩部",
                    "nodeList": []
                },
                {
                    "id": 160,
                    "level": 2,
                    "name": "右",
                    "nodeList": []
                },
                {
                    "id": 161,
                    "level": 2,
                    "name": "手肿块",
                    "nodeList": []
                },
                {
                    "id": 162,
                    "level": 2,
                    "name": "背部",
                    "nodeList": []
                },
                {
                    "id": 163,
                    "level": 2,
                    "name": "上臂肿块",
                    "nodeList": []
                },
                {
                    "id": 164,
                    "level": 2,
                    "name": "臀部",
                    "nodeList": []
                },
                {
                    "id": 165,
                    "level": 2,
                    "name": "大小腿肿块",
                    "nodeList": []
                },
                {
                    "id": 166,
                    "level": 2,
                    "name": "股骨上下端肿块",
                    "nodeList": []
                },
                {
                    "id": 167,
                    "level": 2,
                    "name": "膝肿块",
                    "nodeList": []
                },
                {
                    "id": 168,
                    "level": 2,
                    "name": "足部肿块",
                    "nodeList": []
                },
                {
                    "id": 169,
                    "level": 2,
                    "name": "椎间盘组织",
                    "nodeList": []
                },
                {
                    "id": 170,
                    "level": 2,
                    "name": "前臂肿块",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 171,
            "level": 1,
            "name": "眼及附属器",
            "nodeList": [
                {
                    "id": 172,
                    "level": 2,
                    "name": "右眼球",
                    "nodeList": []
                },
                {
                    "id": 173,
                    "level": 2,
                    "name": "左眼上睑",
                    "nodeList": []
                },
                {
                    "id": 174,
                    "level": 2,
                    "name": "左眼下睑",
                    "nodeList": []
                },
                {
                    "id": 175,
                    "level": 2,
                    "name": "右眼下睑",
                    "nodeList": []
                },
                {
                    "id": 176,
                    "level": 2,
                    "name": "右眼上睑",
                    "nodeList": []
                },
                {
                    "id": 177,
                    "level": 2,
                    "name": "右内眦",
                    "nodeList": []
                },
                {
                    "id": 178,
                    "level": 2,
                    "name": "左内眦",
                    "nodeList": []
                },
                {
                    "id": 179,
                    "level": 2,
                    "name": "右眼泪阜",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 180,
            "level": 1,
            "name": "头面部",
            "nodeList": [
                {
                    "id": 181,
                    "level": 2,
                    "name": "眼球",
                    "nodeList": []
                },
                {
                    "id": 182,
                    "level": 2,
                    "name": "眼睑新生物",
                    "nodeList": []
                },
                {
                    "id": 183,
                    "level": 2,
                    "name": "外耳新生物",
                    "nodeList": []
                },
                {
                    "id": 184,
                    "level": 2,
                    "name": "鼻腔新生物",
                    "nodeList": []
                },
                {
                    "id": 185,
                    "level": 2,
                    "name": "声带新生物",
                    "nodeList": []
                },
                {
                    "id": 186,
                    "level": 2,
                    "name": "中耳胆脂瘤",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 187,
            "level": 1,
            "name": "睾丸",
            "nodeList": [
                {
                    "id": 188,
                    "level": 2,
                    "name": "精索静脉",
                    "nodeList": []
                },
                {
                    "id": 189,
                    "level": 2,
                    "name": "鞘膜组织",
                    "nodeList": []
                },
                {
                    "id": 190,
                    "level": 2,
                    "name": "阴茎肿块",
                    "nodeList": []
                },
                {
                    "id": 191,
                    "level": 2,
                    "name": "附睾结节",
                    "nodeList": []
                },
                {
                    "id": 192,
                    "level": 2,
                    "name": "双侧睾丸及附睾",
                    "nodeList": []
                },
                {
                    "id": 193,
                    "level": 2,
                    "name": "右侧",
                    "nodeList": []
                },
                {
                    "id": 194,
                    "level": 2,
                    "name": "包皮",
                    "nodeList": []
                },
                {
                    "id": 195,
                    "level": 2,
                    "name": "附睾肿块",
                    "nodeList": []
                },
                {
                    "id": 196,
                    "level": 2,
                    "name": "睾丸肿瘤",
                    "nodeList": []
                },
                {
                    "id": 197,
                    "level": 2,
                    "name": "左侧",
                    "nodeList": []
                },
                {
                    "id": 198,
                    "level": 2,
                    "name": "前列腺",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 199,
            "level": 1,
            "name": "涂片",
            "nodeList": [
                {
                    "id": 200,
                    "level": 2,
                    "name": "宫颈涂片",
                    "nodeList": []
                },
                {
                    "id": 201,
                    "level": 2,
                    "name": "腹腔冲洗液",
                    "nodeList": []
                },
                {
                    "id": 202,
                    "level": 2,
                    "name": "左腋下淋巴结针吸",
                    "nodeList": []
                },
                {
                    "id": 203,
                    "level": 2,
                    "name": "右腋下淋巴结针吸",
                    "nodeList": []
                },
                {
                    "id": 204,
                    "level": 2,
                    "name": "TBNA",
                    "nodeList": []
                },
                {
                    "id": 205,
                    "level": 2,
                    "name": "B超穿刺",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 206,
            "level": 1,
            "name": "骨髓活检部位",
            "nodeList": [
                {
                    "id": 207,
                    "level": 2,
                    "name": "髂前",
                    "nodeList": []
                },
                {
                    "id": 208,
                    "level": 2,
                    "name": "髂后",
                    "nodeList": []
                }
            ]
        }
    ],
    "selectTimeList": [
        {
            "id": 1,
            "name": "今天"
        },
        {
            "id": 2,
            "name": "昨天"
        },
        {
            "id": 3,
            "name": "前天"
        },
        {
            "id": 4,
            "name": "本周"
        },
        {
            "id": 5,
            "name": "本月"
        },
        {
            "id": 6,
            "name": "上月"
        },
        {
            "id": 7,
            "name": "本年"
        }
    ],
    "submittingPhysicianList": [
        {
            "isDelete": false,
            "name": "test",
            "sort": 1,
            "submittingPhysicianId": 1
        }
    ],
    "chargeTypeList": [
        {
            "chargeTypeId": 1,
            "isDelete": false,
            "name": "门诊",
            "sort": 1
        }
    ],
    "specimenTypeList": [
        {
            "isDelete": false,
            "name": "大标本",
            "sort": 1,
            "specimenTypeId": 1
        },
        {
            "isDelete": false,
            "name": "小标本",
            "sort": 2,
            "specimenTypeId": 2
        }
    ],
    "ageUnitList": [
        {
            "id": 1,
            "name": "岁"
        },
        {
            "id": 2,
            "name": "月"
        },
        {
            "id": 3,
            "name": "天"
        },
        {
            "id": 4,
            "name": "时"
        }
    ],
    "pausimeniaList": [
        {
            "id": 1,
            "name": "是"
        },
        {
            "id": 2,
            "name": "否"
        }
    ],
    "specimenReceiveList": [],
    "hisCodeList": [
        {
            "id": 1,
            "name": "住院号"
        },
        {
            "id": 2,
            "name": "申请号"
        },
        {
            "id": 3,
            "name": "病人ID"
        },
        {
            "id": 4,
            "name": "门诊号"
        }
    ],
    "clinicalDiagnosisList": [
        {
            "id": 2,
            "level": 1,
            "name": "阑尾",
            "nodeList": [
                {
                    "id": 3,
                    "level": 2,
                    "name": "急性阑尾炎。",
                    "nodeList": []
                },
                {
                    "id": 4,
                    "level": 2,
                    "name": "慢性阑尾炎。",
                    "nodeList": []
                },
                {
                    "id": 5,
                    "level": 2,
                    "name": "慢性阑尾炎急性发作。",
                    "nodeList": []
                },
                {
                    "id": 6,
                    "level": 2,
                    "name": "急性单纯性阑尾炎。",
                    "nodeList": []
                },
                {
                    "id": 7,
                    "level": 2,
                    "name": "急性化脓性阑尾炎。",
                    "nodeList": []
                },
                {
                    "id": 8,
                    "level": 2,
                    "name": "急性坏疽性阑尾炎。",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 9,
            "level": 1,
            "name": "胆囊",
            "nodeList": [
                {
                    "id": 10,
                    "level": 2,
                    "name": "胆囊炎。",
                    "nodeList": []
                },
                {
                    "id": 11,
                    "level": 2,
                    "name": "胆囊炎，胆囊结石。",
                    "nodeList": []
                },
                {
                    "id": 12,
                    "level": 2,
                    "name": "慢性胆囊炎。",
                    "nodeList": []
                },
                {
                    "id": 13,
                    "level": 2,
                    "name": "慢性胆囊炎急性发作。",
                    "nodeList": []
                },
                {
                    "id": 14,
                    "level": 2,
                    "name": "急性胆囊炎。",
                    "nodeList": []
                },
                {
                    "id": 15,
                    "level": 2,
                    "name": "急性坏疽性胆囊炎。",
                    "nodeList": []
                },
                {
                    "id": 16,
                    "level": 2,
                    "name": "胆囊癌。",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 17,
            "level": 1,
            "name": "胃",
            "nodeList": [
                {
                    "id": 18,
                    "level": 2,
                    "name": "待查。",
                    "nodeList": []
                },
                {
                    "id": 19,
                    "level": 2,
                    "name": "胃溃疡。",
                    "nodeList": []
                },
                {
                    "id": 20,
                    "level": 2,
                    "name": "十二指肠球部溃疡。",
                    "nodeList": []
                },
                {
                    "id": 21,
                    "level": 2,
                    "name": "胃溃疡恶变。",
                    "nodeList": []
                },
                {
                    "id": 22,
                    "level": 2,
                    "name": "胃溃疡伴穿孔。",
                    "nodeList": []
                },
                {
                    "id": 23,
                    "level": 2,
                    "name": "十二指肠球部溃疡伴穿孔。",
                    "nodeList": []
                },
                {
                    "id": 24,
                    "level": 2,
                    "name": "慢性胃炎。",
                    "nodeList": []
                },
                {
                    "id": 25,
                    "level": 2,
                    "name": "慢性浅表性胃炎。",
                    "nodeList": []
                },
                {
                    "id": 26,
                    "level": 2,
                    "name": "慢性萎缩性胃炎。",
                    "nodeList": []
                },
                {
                    "id": 27,
                    "level": 2,
                    "name": "胃癌。",
                    "nodeList": []
                },
                {
                    "id": 28,
                    "level": 2,
                    "name": "胃腺癌。",
                    "nodeList": []
                },
                {
                    "id": 29,
                    "level": 2,
                    "name": "贲门癌",
                    "nodeList": []
                },
                {
                    "id": 30,
                    "level": 2,
                    "name": "胃窦癌",
                    "nodeList": []
                },
                {
                    "id": 31,
                    "level": 2,
                    "name": "胃体癌",
                    "nodeList": []
                },
                {
                    "id": 32,
                    "level": 2,
                    "name": "胃角溃疡",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 33,
            "level": 1,
            "name": "食道",
            "nodeList": [
                {
                    "id": 34,
                    "level": 2,
                    "name": "食道炎。",
                    "nodeList": []
                },
                {
                    "id": 35,
                    "level": 2,
                    "name": "食道溃疡。",
                    "nodeList": []
                },
                {
                    "id": 36,
                    "level": 2,
                    "name": "食道溃疡恶变。",
                    "nodeList": []
                },
                {
                    "id": 37,
                    "level": 2,
                    "name": "食道肿瘤 。",
                    "nodeList": []
                },
                {
                    "id": 38,
                    "level": 2,
                    "name": "食道癌。",
                    "nodeList": []
                },
                {
                    "id": 39,
                    "level": 2,
                    "name": "食道息肉",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 40,
            "level": 1,
            "name": "肠",
            "nodeList": [
                {
                    "id": 41,
                    "level": 2,
                    "name": "待查。",
                    "nodeList": []
                },
                {
                    "id": 42,
                    "level": 2,
                    "name": "肠炎。",
                    "nodeList": []
                },
                {
                    "id": 43,
                    "level": 2,
                    "name": "结肠息肉。",
                    "nodeList": []
                },
                {
                    "id": 44,
                    "level": 2,
                    "name": "结肠炎性息肉。",
                    "nodeList": []
                },
                {
                    "id": 45,
                    "level": 2,
                    "name": "结肠肿瘤。",
                    "nodeList": []
                },
                {
                    "id": 46,
                    "level": 2,
                    "name": "结肠腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 47,
                    "level": 2,
                    "name": "结肠绒毛状腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 48,
                    "level": 2,
                    "name": "结肠肉瘤。",
                    "nodeList": []
                },
                {
                    "id": 49,
                    "level": 2,
                    "name": "结肠癌。",
                    "nodeList": []
                },
                {
                    "id": 50,
                    "level": 2,
                    "name": "结肠肿块待查。",
                    "nodeList": []
                },
                {
                    "id": 51,
                    "level": 2,
                    "name": "直肠息肉。",
                    "nodeList": []
                },
                {
                    "id": 52,
                    "level": 2,
                    "name": "直肠炎性息肉。",
                    "nodeList": []
                },
                {
                    "id": 53,
                    "level": 2,
                    "name": "直肠肿瘤。",
                    "nodeList": []
                },
                {
                    "id": 54,
                    "level": 2,
                    "name": "直肠腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 55,
                    "level": 2,
                    "name": "直肠绒毛状腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 56,
                    "level": 2,
                    "name": "直肠肉瘤。",
                    "nodeList": []
                },
                {
                    "id": 57,
                    "level": 2,
                    "name": "直肠癌。",
                    "nodeList": []
                },
                {
                    "id": 58,
                    "level": 2,
                    "name": "直肠肿块待查。",
                    "nodeList": []
                },
                {
                    "id": 59,
                    "level": 2,
                    "name": "溃疡性结肠炎",
                    "nodeList": []
                },
                {
                    "id": 60,
                    "level": 2,
                    "name": "多发性结肠息肉",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 61,
            "level": 1,
            "name": "颈部甲状腺",
            "nodeList": [
                {
                    "id": 62,
                    "level": 2,
                    "name": "甲亢。",
                    "nodeList": []
                },
                {
                    "id": 63,
                    "level": 2,
                    "name": "甲状腺囊肿。",
                    "nodeList": []
                },
                {
                    "id": 64,
                    "level": 2,
                    "name": "甲状腺腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 65,
                    "level": 2,
                    "name": "甲状腺腺癌。",
                    "nodeList": []
                },
                {
                    "id": 66,
                    "level": 2,
                    "name": "桥本氏病。",
                    "nodeList": []
                },
                {
                    "id": 67,
                    "level": 2,
                    "name": "结节性甲状腺肿。",
                    "nodeList": []
                },
                {
                    "id": 68,
                    "level": 2,
                    "name": "甲舌囊肿。",
                    "nodeList": []
                },
                {
                    "id": 69,
                    "level": 2,
                    "name": "颈部肿瘤。",
                    "nodeList": []
                },
                {
                    "id": 70,
                    "level": 2,
                    "name": "颈部包块待查。",
                    "nodeList": []
                },
                {
                    "id": 71,
                    "level": 2,
                    "name": "囊状水瘤。",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 72,
            "level": 1,
            "name": "淋巴结",
            "nodeList": [
                {
                    "id": 73,
                    "level": 2,
                    "name": "恶性淋巴瘤。",
                    "nodeList": []
                },
                {
                    "id": 74,
                    "level": 2,
                    "name": "淋巴结转移癌。",
                    "nodeList": []
                },
                {
                    "id": 75,
                    "level": 2,
                    "name": "淋巴结结核。",
                    "nodeList": []
                },
                {
                    "id": 76,
                    "level": 2,
                    "name": "淋巴结炎。",
                    "nodeList": []
                },
                {
                    "id": 77,
                    "level": 2,
                    "name": "淋巴结肿大待查",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 78,
            "level": 1,
            "name": "乳腺",
            "nodeList": [
                {
                    "id": 79,
                    "level": 2,
                    "name": "乳腺纤维腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 80,
                    "level": 2,
                    "name": "乳腺腺病。",
                    "nodeList": []
                },
                {
                    "id": 81,
                    "level": 2,
                    "name": "乳腺包块。",
                    "nodeList": []
                },
                {
                    "id": 82,
                    "level": 2,
                    "name": "乳腺炎。",
                    "nodeList": []
                },
                {
                    "id": 83,
                    "level": 2,
                    "name": "乳腺癌。",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 84,
            "level": 1,
            "name": "骨外",
            "nodeList": [
                {
                    "id": 85,
                    "level": 2,
                    "name": "骨肿瘤",
                    "nodeList": []
                },
                {
                    "id": 86,
                    "level": 2,
                    "name": "骨囊肿",
                    "nodeList": []
                },
                {
                    "id": 87,
                    "level": 2,
                    "name": "骨结构不良",
                    "nodeList": []
                },
                {
                    "id": 88,
                    "level": 2,
                    "name": "骨髓炎",
                    "nodeList": []
                },
                {
                    "id": 89,
                    "level": 2,
                    "name": "骨肉瘤",
                    "nodeList": []
                },
                {
                    "id": 90,
                    "level": 2,
                    "name": "外生骨疣",
                    "nodeList": []
                },
                {
                    "id": 91,
                    "level": 2,
                    "name": "软骨瘤",
                    "nodeList": []
                },
                {
                    "id": 92,
                    "level": 2,
                    "name": "软骨肉瘤",
                    "nodeList": []
                },
                {
                    "id": 93,
                    "level": 2,
                    "name": "骨结核",
                    "nodeList": []
                },
                {
                    "id": 94,
                    "level": 2,
                    "name": "骨纤维肉瘤",
                    "nodeList": []
                },
                {
                    "id": 95,
                    "level": 2,
                    "name": "坐骨结节囊肿",
                    "nodeList": []
                },
                {
                    "id": 96,
                    "level": 2,
                    "name": "膝关节囊肿",
                    "nodeList": []
                },
                {
                    "id": 97,
                    "level": 2,
                    "name": "腕关节囊肿",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 98,
            "level": 1,
            "name": "脑外",
            "nodeList": [
                {
                    "id": 99,
                    "level": 2,
                    "name": "脑胶质瘤。",
                    "nodeList": []
                },
                {
                    "id": 100,
                    "level": 2,
                    "name": "脑膜瘤。",
                    "nodeList": []
                },
                {
                    "id": 101,
                    "level": 2,
                    "name": "髓母细胞瘤。",
                    "nodeList": []
                },
                {
                    "id": 102,
                    "level": 2,
                    "name": "小脑血管母细胞瘤。",
                    "nodeList": []
                },
                {
                    "id": 103,
                    "level": 2,
                    "name": "脑血管畸形。",
                    "nodeList": []
                },
                {
                    "id": 104,
                    "level": 2,
                    "name": "脑脓肿。",
                    "nodeList": []
                },
                {
                    "id": 105,
                    "level": 2,
                    "name": "脑转移性肿瘤",
                    "nodeList": []
                },
                {
                    "id": 106,
                    "level": 2,
                    "name": "垂体瘤",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 107,
            "level": 1,
            "name": "泌尿系统",
            "nodeList": [
                {
                    "id": 108,
                    "level": 2,
                    "name": "肾肿瘤。",
                    "nodeList": []
                },
                {
                    "id": 109,
                    "level": 2,
                    "name": "肾癌。",
                    "nodeList": []
                },
                {
                    "id": 110,
                    "level": 2,
                    "name": "肾结核。",
                    "nodeList": []
                },
                {
                    "id": 111,
                    "level": 2,
                    "name": "肾盂积水。",
                    "nodeList": []
                },
                {
                    "id": 112,
                    "level": 2,
                    "name": "肾结石。",
                    "nodeList": []
                },
                {
                    "id": 113,
                    "level": 2,
                    "name": "慢性肾盂肾炎。",
                    "nodeList": []
                },
                {
                    "id": 114,
                    "level": 2,
                    "name": "输尿管结石。",
                    "nodeList": []
                },
                {
                    "id": 115,
                    "level": 2,
                    "name": "输尿管息肉。",
                    "nodeList": []
                },
                {
                    "id": 116,
                    "level": 2,
                    "name": "输尿管狭窄",
                    "nodeList": []
                },
                {
                    "id": 117,
                    "level": 2,
                    "name": "膀胱癌。",
                    "nodeList": []
                },
                {
                    "id": 118,
                    "level": 2,
                    "name": "膀胱息肉。",
                    "nodeList": []
                },
                {
                    "id": 119,
                    "level": 2,
                    "name": "附睾结核。",
                    "nodeList": []
                },
                {
                    "id": 120,
                    "level": 2,
                    "name": "睾丸肿瘤。",
                    "nodeList": []
                },
                {
                    "id": 121,
                    "level": 2,
                    "name": "鞘膜积液。",
                    "nodeList": []
                },
                {
                    "id": 122,
                    "level": 2,
                    "name": "附睾炎",
                    "nodeList": []
                },
                {
                    "id": 123,
                    "level": 2,
                    "name": "阴茎癌",
                    "nodeList": []
                },
                {
                    "id": 124,
                    "level": 2,
                    "name": "尖锐湿疣",
                    "nodeList": []
                },
                {
                    "id": 125,
                    "level": 2,
                    "name": "前列腺增生",
                    "nodeList": []
                },
                {
                    "id": 126,
                    "level": 2,
                    "name": "前列腺癌",
                    "nodeList": []
                },
                {
                    "id": 127,
                    "level": 2,
                    "name": "肾上腺嗜铬细胞瘤",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 128,
            "level": 1,
            "name": "女性生殖系统",
            "nodeList": [
                {
                    "id": 129,
                    "level": 2,
                    "name": "阴道流血待查。",
                    "nodeList": []
                },
                {
                    "id": 130,
                    "level": 2,
                    "name": "宫颈息肉。",
                    "nodeList": []
                },
                {
                    "id": 131,
                    "level": 2,
                    "name": "慢性宫颈炎。",
                    "nodeList": []
                },
                {
                    "id": 132,
                    "level": 2,
                    "name": "输卵管妊娠。",
                    "nodeList": []
                },
                {
                    "id": 133,
                    "level": 2,
                    "name": "不全流产。",
                    "nodeList": []
                },
                {
                    "id": 134,
                    "level": 2,
                    "name": "稽留流产",
                    "nodeList": []
                },
                {
                    "id": 135,
                    "level": 2,
                    "name": "难免流产",
                    "nodeList": []
                },
                {
                    "id": 136,
                    "level": 2,
                    "name": "完全流产",
                    "nodeList": []
                },
                {
                    "id": 137,
                    "level": 2,
                    "name": "宫外孕。",
                    "nodeList": []
                },
                {
                    "id": 138,
                    "level": 2,
                    "name": "宫颈癌。",
                    "nodeList": []
                },
                {
                    "id": 139,
                    "level": 2,
                    "name": "子宫腺肌病。",
                    "nodeList": []
                },
                {
                    "id": 140,
                    "level": 2,
                    "name": "子宫肌瘤。",
                    "nodeList": []
                },
                {
                    "id": 141,
                    "level": 2,
                    "name": "卵巢畸胎瘤。",
                    "nodeList": []
                },
                {
                    "id": 142,
                    "level": 2,
                    "name": "卵巢囊肿。",
                    "nodeList": []
                },
                {
                    "id": 143,
                    "level": 2,
                    "name": "卵巢腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 144,
                    "level": 2,
                    "name": "卵巢囊腺瘤。",
                    "nodeList": []
                },
                {
                    "id": 145,
                    "level": 2,
                    "name": "宫颈尖疣",
                    "nodeList": []
                },
                {
                    "id": 146,
                    "level": 2,
                    "name": "外阴尖疣",
                    "nodeList": []
                },
                {
                    "id": 147,
                    "level": 2,
                    "name": "功血",
                    "nodeList": []
                },
                {
                    "id": 148,
                    "level": 2,
                    "name": "宫颈炎",
                    "nodeList": []
                },
                {
                    "id": 149,
                    "level": 2,
                    "name": "排除内膜病变",
                    "nodeList": []
                },
                {
                    "id": 150,
                    "level": 2,
                    "name": "月经紊乱",
                    "nodeList": []
                },
                {
                    "id": 151,
                    "level": 2,
                    "name": "宫颈纳囊",
                    "nodeList": []
                },
                {
                    "id": 152,
                    "level": 2,
                    "name": "附件炎",
                    "nodeList": []
                },
                {
                    "id": 153,
                    "level": 2,
                    "name": "宫颈赘生物",
                    "nodeList": []
                },
                {
                    "id": 154,
                    "level": 2,
                    "name": "子宫内膜多发息肉",
                    "nodeList": []
                },
                {
                    "id": 155,
                    "level": 2,
                    "name": "子宫内病变",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 156,
            "level": 1,
            "name": "口腔",
            "nodeList": [
                {
                    "id": 157,
                    "level": 2,
                    "name": "下唇粘液囊肿。",
                    "nodeList": []
                },
                {
                    "id": 158,
                    "level": 2,
                    "name": "舌部血管瘤。",
                    "nodeList": []
                },
                {
                    "id": 159,
                    "level": 2,
                    "name": "牙龈瘤。",
                    "nodeList": []
                },
                {
                    "id": 160,
                    "level": 2,
                    "name": "颌骨造釉细胞瘤。",
                    "nodeList": []
                },
                {
                    "id": 161,
                    "level": 2,
                    "name": "涎腺混合瘤。",
                    "nodeList": []
                },
                {
                    "id": 162,
                    "level": 2,
                    "name": "颌骨囊肿。",
                    "nodeList": []
                },
                {
                    "id": 163,
                    "level": 2,
                    "name": "颊部粘膜白斑。",
                    "nodeList": []
                },
                {
                    "id": 164,
                    "level": 2,
                    "name": "涎腺腺样囊性癌。",
                    "nodeList": []
                },
                {
                    "id": 165,
                    "level": 2,
                    "name": "腮腺混合瘤。",
                    "nodeList": []
                },
                {
                    "id": 166,
                    "level": 2,
                    "name": "腮腺癌。",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 167,
            "level": 1,
            "name": "耳鼻喉",
            "nodeList": [
                {
                    "id": 168,
                    "level": 2,
                    "name": "慢性扁桃体炎",
                    "nodeList": []
                },
                {
                    "id": 169,
                    "level": 2,
                    "name": "声带息肉",
                    "nodeList": []
                },
                {
                    "id": 170,
                    "level": 2,
                    "name": "声带小结",
                    "nodeList": []
                },
                {
                    "id": 171,
                    "level": 2,
                    "name": "喉癌",
                    "nodeList": []
                },
                {
                    "id": 172,
                    "level": 2,
                    "name": "喉结核",
                    "nodeList": []
                },
                {
                    "id": 173,
                    "level": 2,
                    "name": "鼻咽癌",
                    "nodeList": []
                },
                {
                    "id": 174,
                    "level": 2,
                    "name": "鼻息肉",
                    "nodeList": []
                },
                {
                    "id": 175,
                    "level": 2,
                    "name": "鼻乳头瘤",
                    "nodeList": []
                },
                {
                    "id": 176,
                    "level": 2,
                    "name": "鼻咽血管瘤",
                    "nodeList": []
                },
                {
                    "id": 177,
                    "level": 2,
                    "name": "上颌窦囊肿",
                    "nodeList": []
                },
                {
                    "id": 178,
                    "level": 2,
                    "name": "外耳乳头状瘤",
                    "nodeList": []
                },
                {
                    "id": 179,
                    "level": 2,
                    "name": "中耳胆脂瘤",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 180,
            "level": 1,
            "name": "皮肤软组织",
            "nodeList": [
                {
                    "id": 181,
                    "level": 2,
                    "name": "红斑狼疮",
                    "nodeList": []
                }
            ]
        },
        {
            "id": 182,
            "level": 1,
            "name": "液基细胞",
            "nodeList": [
                {
                    "id": 183,
                    "level": 2,
                    "name": "宫颈炎",
                    "nodeList": []
                },
                {
                    "id": 184,
                    "level": 2,
                    "name": "子宫肌瘤",
                    "nodeList": []
                },
                {
                    "id": 185,
                    "level": 2,
                    "name": "阴道流血",
                    "nodeList": []
                },
                {
                    "id": 186,
                    "level": 2,
                    "name": "宫颈糜烂",
                    "nodeList": []
                },
                {
                    "id": 187,
                    "level": 2,
                    "name": "阴道炎",
                    "nodeList": []
                },
                {
                    "id": 188,
                    "level": 2,
                    "name": "宫颈癌术后一年复查",
                    "nodeList": []
                },
                {
                    "id": 189,
                    "level": 2,
                    "name": "孕前检查",
                    "nodeList": []
                },
                {
                    "id": 190,
                    "level": 2,
                    "name": "慢性宫颈炎",
                    "nodeList": []
                },
                {
                    "id": 191,
                    "level": 2,
                    "name": "纳氏囊肿",
                    "nodeList": []
                },
                {
                    "id": 192,
                    "level": 2,
                    "name": "子宫内膜癌术后",
                    "nodeList": []
                },
                {
                    "id": 193,
                    "level": 2,
                    "name": "宫颈原位癌术后",
                    "nodeList": []
                },
                {
                    "id": 194,
                    "level": 2,
                    "name": "宫颈息内",
                    "nodeList": []
                },
                {
                    "id": 195,
                    "level": 2,
                    "name": "体检",
                    "nodeList": []
                }
            ]
        }
    ],
    "inspectUnitList": [
        {
            "inspectUnitId": 1,
            "isDelete": false,
            "name": "本院",
            "sort": 1
        },
        {
            "inspectUnitId": 4,
            "isDelete": false,
            "name": "外院",
            "sort": 1
        }
    ],
    "selectNoList": [
        {
            "id": 1,
            "name": "病理号"
        },
        {
            "id": 2,
            "name": "冰冻标识"
        },
        {
            "id": 3,
            "name": "申请号"
        },
        {
            "id": 4,
            "name": "门诊号"
        },
        {
            "id": 5,
            "name": "住院号"
        },
        {
            "id": 6,
            "name": "病人ID"
        },
        {
            "id": 7,
            "name": "姓名"
        }
    ]
}
    `);
  }
}