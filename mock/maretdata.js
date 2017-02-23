module.exports = {
    api: '/material/load',
    response: function (req, res) {
       res.send(`{
    "passageWayList": [
        {
            "isDelete": false,
            "name": "红",
            "passageWayId": 1
        },
        {
            "isDelete": false,
            "name": "绿",
            "passageWayId": 2
        },
        {
            "isDelete": false,
            "name": "蓝",
            "passageWayId": 4
        }
    ],
    "zangqisPrivate": [
        {
            "bingzhongs": [
                {
                    "bingzhongId": 2,
                    "bingzhongName": "test01",
                    "fanbens": [
                        {
                            "fanbenContent": "dasdfasdfa",
                            "fanbenId": 1,
                            "sort": 1
                        },
                        {
                            "fanbenContent": "asdfffffffffdsafadsfas",
                            "fanbenId": 2,
                            "sort": 1
                        }
                    ],
                    "sort": 1
                },
                {
                    "bingzhongId": 3,
                    "bingzhongName": "test01",
                    "fanbens": [
                        {
                            "sort": 1
                        }
                    ],
                    "sort": 1
                }
            ],
            "isDelete": true,
            "sort": 1,
            "type": 1,
            "userId": 1,
            "zangqiId": 2,
            "zangqiName": "test1"
        }
    ],
    "sampleDoctorList": [
        {
            "isDelete": false,
            "name": "张三",
            "sampleDoctorId": 1,
            "sort": 0
        },
        {
            "isDelete": false,
            "name": "李四",
            "sampleDoctorId": 2,
            "sort": 1
        },
        {
            "isDelete": false,
            "name": "王五",
            "sampleDoctorId": 3,
            "sort": 2
        }
    ],
    "materialNoList": [
        {
            "isDelete": false,
            "materialNoId": 1,
            "name": "1",
            "sort": 0
        },
        {
            "isDelete": false,
            "materialNoId": 2,
            "name": "A",
            "sort": 1
        },
        {
            "isDelete": false,
            "materialNoId": 3,
            "name": "A1",
            "sort": 2
        },
        {
            "isDelete": false,
            "materialNoId": 4,
            "name": "B1",
            "sort": 3
        },
        {
            "isDelete": false,
            "materialNoId": 5,
            "name": "C1",
            "sort": 4
        },
        {
            "isDelete": false,
            "materialNoId": 6,
            "name": "1°",
            "sort": 5
        },
        {
            "isDelete": false,
            "materialNoId": 7,
            "name": "①",
            "sort": 6
        },
        {
            "isDelete": false,
            "materialNoId": 8,
            "name": "1-8",
            "sort": 7
        },
        {
            "isDelete": false,
            "materialNoId": 9,
            "name": "A-E",
            "sort": 8
        }
    ],
    "taskSourceList": [
        {
            "id": 2,
            "isDelete": false,
            "name": "常规",
            "sort": 0,
            "taskSourceId": 2
        },
        {
            "id": 3,
            "isDelete": false,
            "name": "冰余",
            "sort": 1,
            "taskSourceId": 3
        },
        {
            "id": 4,
            "isDelete": false,
            "name": "冰石",
            "sort": 2,
            "taskSourceId": 4
        },
        {
            "id": 5,
            "isDelete": false,
            "name": "补取",
            "sort": 3,
            "taskSourceId": 5
        },
        {
            "id": 6,
            "isDelete": false,
            "name": "脱钙",
            "sort": 4,
            "taskSourceId": 6
        },
        {
            "id": 7,
            "isDelete": false,
            "name": "1",
            "sort": 0,
            "taskSourceId": 7
        },
        {
            "id": 8,
            "isDelete": false,
            "name": "A",
            "sort": 1,
            "taskSourceId": 8
        },
        {
            "id": 9,
            "isDelete": false,
            "name": "A1",
            "sort": 2,
            "taskSourceId": 9
        },
        {
            "id": 10,
            "isDelete": false,
            "name": "B1",
            "sort": 3,
            "taskSourceId": 10
        },
        {
            "id": 11,
            "isDelete": false,
            "name": "C1",
            "sort": 4,
            "taskSourceId": 11
        },
        {
            "id": 12,
            "isDelete": false,
            "name": "1°",
            "sort": 5,
            "taskSourceId": 12
        },
        {
            "id": 13,
            "isDelete": false,
            "name": "①",
            "sort": 6,
            "taskSourceId": 13
        },
        {
            "id": 14,
            "isDelete": false,
            "name": "1-8",
            "sort": 7,
            "taskSourceId": 14
        },
        {
            "id": 15,
            "isDelete": false,
            "name": "A-E",
            "sort": 8,
            "taskSourceId": 15
        }
    ],
    "specimenHandleList": [
        {
            "isDelete": false,
            "name": "保存一周",
            "specimenHandleId": 1
        },
        {
            "isDelete": false,
            "name": "保存30年",
            "specimenHandleId": 2
        },
        {
            "isDelete": false,
            "name": "保存30天",
            "specimenHandleId": 3
        }
    ],
    "materialPartsList": {
        "id": 0,
        "level": 0,
        "name": "root",
        "nodeList": [
            {
                "id": 1,
                "level": 1,
                "name": "肿物通用",
                "nodeList": [
                    {
                        "id": 2,
                        "level": 2,
                        "name": "肿物中心",
                        "nodeList": []
                    },
                    {
                        "id": 3,
                        "level": 2,
                        "name": "肿物及周边",
                        "nodeList": []
                    },
                    {
                        "id": 4,
                        "level": 2,
                        "name": "肿物旁LN",
                        "nodeList": []
                    },
                    {
                        "id": 5,
                        "level": 2,
                        "name": "取材近肿物切线",
                        "nodeList": []
                    },
                    {
                        "id": 6,
                        "level": 2,
                        "name": "取材远肿物切线",
                        "nodeList": []
                    },
                    {
                        "id": 7,
                        "level": 2,
                        "name": "囊壁",
                        "nodeList": []
                    },
                    {
                        "id": 8,
                        "level": 2,
                        "name": "结节",
                        "nodeList": []
                    },
                    {
                        "id": 9,
                        "level": 2,
                        "name": "突起",
                        "nodeList": []
                    },
                    {
                        "id": 10,
                        "level": 2,
                        "name": "突起与周边",
                        "nodeList": []
                    },
                    {
                        "id": 11,
                        "level": 2,
                        "name": "突起与囊壁",
                        "nodeList": []
                    },
                    {
                        "id": 12,
                        "level": 2,
                        "name": "脱钙",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 13,
                "level": 1,
                "name": "通用2",
                "nodeList": [
                    {
                        "id": 14,
                        "level": 2,
                        "name": "质硬区中心",
                        "nodeList": []
                    },
                    {
                        "id": 15,
                        "level": 2,
                        "name": "质硬区及周边",
                        "nodeList": []
                    },
                    {
                        "id": 16,
                        "level": 2,
                        "name": "结节中心",
                        "nodeList": []
                    },
                    {
                        "id": 17,
                        "level": 2,
                        "name": "结节及周边",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 18,
                "level": 1,
                "name": "肠",
                "nodeList": [
                    {
                        "id": 19,
                        "level": 2,
                        "name": "取材近肿物切线",
                        "nodeList": []
                    },
                    {
                        "id": 20,
                        "level": 2,
                        "name": "取材远肿物切线",
                        "nodeList": []
                    },
                    {
                        "id": 21,
                        "level": 2,
                        "name": "送检上切线",
                        "nodeList": []
                    },
                    {
                        "id": 22,
                        "level": 2,
                        "name": "送检下切线",
                        "nodeList": []
                    },
                    {
                        "id": 23,
                        "level": 2,
                        "name": "取材上切线",
                        "nodeList": []
                    },
                    {
                        "id": 24,
                        "level": 2,
                        "name": "取材下切线",
                        "nodeList": []
                    },
                    {
                        "id": 25,
                        "level": 2,
                        "name": "肛周皮肤",
                        "nodeList": []
                    },
                    {
                        "id": 26,
                        "level": 2,
                        "name": "阑尾",
                        "nodeList": []
                    },
                    {
                        "id": 27,
                        "level": 2,
                        "name": "肿物周围LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 28,
                "level": 1,
                "name": "乳腺",
                "nodeList": [
                    {
                        "id": 29,
                        "level": 2,
                        "name": "乳头",
                        "nodeList": []
                    },
                    {
                        "id": 30,
                        "level": 2,
                        "name": "皮肤切缘",
                        "nodeList": []
                    },
                    {
                        "id": 31,
                        "level": 2,
                        "name": "取材腋窝LN",
                        "nodeList": []
                    },
                    {
                        "id": 32,
                        "level": 2,
                        "name": "送检腋窝LN",
                        "nodeList": []
                    },
                    {
                        "id": 33,
                        "level": 2,
                        "name": "送检腋上LN",
                        "nodeList": []
                    },
                    {
                        "id": 34,
                        "level": 2,
                        "name": "送检腋中LN",
                        "nodeList": []
                    },
                    {
                        "id": 35,
                        "level": 2,
                        "name": "送检腋下LN",
                        "nodeList": []
                    },
                    {
                        "id": 36,
                        "level": 2,
                        "name": "送检腋尖LN",
                        "nodeList": []
                    },
                    {
                        "id": 37,
                        "level": 2,
                        "name": "送检胸肌间LN",
                        "nodeList": []
                    },
                    {
                        "id": 38,
                        "level": 2,
                        "name": "锁骨下LN",
                        "nodeList": []
                    },
                    {
                        "id": 39,
                        "level": 2,
                        "name": "第三级LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 40,
                "level": 1,
                "name": "肺组织",
                "nodeList": [
                    {
                        "id": 41,
                        "level": 2,
                        "name": "肿物与脏层胸膜",
                        "nodeList": []
                    },
                    {
                        "id": 42,
                        "level": 2,
                        "name": "肿物与支气管",
                        "nodeList": []
                    },
                    {
                        "id": 43,
                        "level": 2,
                        "name": "取材支气管断端",
                        "nodeList": []
                    },
                    {
                        "id": 44,
                        "level": 2,
                        "name": "送检支气管断端",
                        "nodeList": []
                    },
                    {
                        "id": 45,
                        "level": 2,
                        "name": "周边肺组织",
                        "nodeList": []
                    },
                    {
                        "id": 46,
                        "level": 2,
                        "name": "支气管旁LN",
                        "nodeList": []
                    },
                    {
                        "id": 47,
                        "level": 2,
                        "name": "肺门LN",
                        "nodeList": []
                    },
                    {
                        "id": 48,
                        "level": 2,
                        "name": "隆突下LN",
                        "nodeList": []
                    },
                    {
                        "id": 49,
                        "level": 2,
                        "name": "第一组LN",
                        "nodeList": []
                    },
                    {
                        "id": 50,
                        "level": 2,
                        "name": "第二组LN",
                        "nodeList": []
                    },
                    {
                        "id": 51,
                        "level": 2,
                        "name": "2a LN",
                        "nodeList": []
                    },
                    {
                        "id": 52,
                        "level": 2,
                        "name": "第三组LN",
                        "nodeList": []
                    },
                    {
                        "id": 53,
                        "level": 2,
                        "name": "3a LN",
                        "nodeList": []
                    },
                    {
                        "id": 54,
                        "level": 2,
                        "name": "第四组LN",
                        "nodeList": []
                    },
                    {
                        "id": 55,
                        "level": 2,
                        "name": "4r L N",
                        "nodeList": []
                    },
                    {
                        "id": 56,
                        "level": 2,
                        "name": "4r sLN",
                        "nodeList": []
                    },
                    {
                        "id": 57,
                        "level": 2,
                        "name": "第五组LN",
                        "nodeList": []
                    },
                    {
                        "id": 58,
                        "level": 2,
                        "name": "5s LN",
                        "nodeList": []
                    },
                    {
                        "id": 59,
                        "level": 2,
                        "name": "第六组LN",
                        "nodeList": []
                    },
                    {
                        "id": 60,
                        "level": 2,
                        "name": "6s LN",
                        "nodeList": []
                    },
                    {
                        "id": 61,
                        "level": 2,
                        "name": "第七组LN",
                        "nodeList": []
                    },
                    {
                        "id": 62,
                        "level": 2,
                        "name": "7s LN",
                        "nodeList": []
                    },
                    {
                        "id": 63,
                        "level": 2,
                        "name": "第八组LN",
                        "nodeList": []
                    },
                    {
                        "id": 64,
                        "level": 2,
                        "name": "第九组 LN",
                        "nodeList": []
                    },
                    {
                        "id": 65,
                        "level": 2,
                        "name": "9s LN",
                        "nodeList": []
                    },
                    {
                        "id": 66,
                        "level": 2,
                        "name": "第十组 LN",
                        "nodeList": []
                    },
                    {
                        "id": 67,
                        "level": 2,
                        "name": "10s LN",
                        "nodeList": []
                    },
                    {
                        "id": 68,
                        "level": 2,
                        "name": "第十一组LN",
                        "nodeList": []
                    },
                    {
                        "id": 69,
                        "level": 2,
                        "name": "第十二组LN",
                        "nodeList": []
                    },
                    {
                        "id": 70,
                        "level": 2,
                        "name": "第十三组LN",
                        "nodeList": []
                    },
                    {
                        "id": 71,
                        "level": 2,
                        "name": "第十四组LN",
                        "nodeList": []
                    },
                    {
                        "id": 72,
                        "level": 2,
                        "name": "12上叶LN",
                        "nodeList": []
                    },
                    {
                        "id": 73,
                        "level": 2,
                        "name": "12下叶LN",
                        "nodeList": []
                    },
                    {
                        "id": 74,
                        "level": 2,
                        "name": "13固有上叶LN",
                        "nodeList": []
                    },
                    {
                        "id": 75,
                        "level": 2,
                        "name": "13舌段LN",
                        "nodeList": []
                    },
                    {
                        "id": 76,
                        "level": 2,
                        "name": "13前段LN",
                        "nodeList": []
                    },
                    {
                        "id": 77,
                        "level": 2,
                        "name": "13尖段LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 78,
                "level": 1,
                "name": "胃",
                "nodeList": [
                    {
                        "id": 79,
                        "level": 2,
                        "name": "肿物与食道",
                        "nodeList": []
                    },
                    {
                        "id": 80,
                        "level": 2,
                        "name": "送检食道切线",
                        "nodeList": []
                    },
                    {
                        "id": 81,
                        "level": 2,
                        "name": "送检贲门切线",
                        "nodeList": []
                    },
                    {
                        "id": 82,
                        "level": 2,
                        "name": "送检幽门切线",
                        "nodeList": []
                    },
                    {
                        "id": 83,
                        "level": 2,
                        "name": "十二指肠残端",
                        "nodeList": []
                    },
                    {
                        "id": 84,
                        "level": 2,
                        "name": "送检小弯侧LN",
                        "nodeList": []
                    },
                    {
                        "id": 85,
                        "level": 2,
                        "name": "送检大弯侧LN",
                        "nodeList": []
                    },
                    {
                        "id": 86,
                        "level": 2,
                        "name": "取材小弯侧LN",
                        "nodeList": []
                    },
                    {
                        "id": 87,
                        "level": 2,
                        "name": "取材大弯侧LN",
                        "nodeList": []
                    },
                    {
                        "id": 88,
                        "level": 2,
                        "name": "贲门右LN",
                        "nodeList": []
                    },
                    {
                        "id": 89,
                        "level": 2,
                        "name": "贲门上LN",
                        "nodeList": []
                    },
                    {
                        "id": 90,
                        "level": 2,
                        "name": "贲门下LN",
                        "nodeList": []
                    },
                    {
                        "id": 91,
                        "level": 2,
                        "name": "贲门胃左LN",
                        "nodeList": []
                    },
                    {
                        "id": 92,
                        "level": 2,
                        "name": "幽门上LN",
                        "nodeList": []
                    },
                    {
                        "id": 93,
                        "level": 2,
                        "name": "幽门下LN",
                        "nodeList": []
                    },
                    {
                        "id": 94,
                        "level": 2,
                        "name": "肝十二指肠韧带LN",
                        "nodeList": []
                    },
                    {
                        "id": 95,
                        "level": 2,
                        "name": "隆突下LN",
                        "nodeList": []
                    },
                    {
                        "id": 96,
                        "level": 2,
                        "name": "第一组LN",
                        "nodeList": []
                    },
                    {
                        "id": 97,
                        "level": 2,
                        "name": "第二组LN",
                        "nodeList": []
                    },
                    {
                        "id": 98,
                        "level": 2,
                        "name": "第三组LN",
                        "nodeList": []
                    },
                    {
                        "id": 99,
                        "level": 2,
                        "name": "第四组LN",
                        "nodeList": []
                    },
                    {
                        "id": 100,
                        "level": 2,
                        "name": "4sa LN",
                        "nodeList": []
                    },
                    {
                        "id": 101,
                        "level": 2,
                        "name": "4sb LN",
                        "nodeList": []
                    },
                    {
                        "id": 102,
                        "level": 2,
                        "name": "4sd LN",
                        "nodeList": []
                    },
                    {
                        "id": 103,
                        "level": 2,
                        "name": "第五组LN",
                        "nodeList": []
                    },
                    {
                        "id": 104,
                        "level": 2,
                        "name": "第六组LN",
                        "nodeList": []
                    },
                    {
                        "id": 105,
                        "level": 2,
                        "name": "第七组LN",
                        "nodeList": []
                    },
                    {
                        "id": 106,
                        "level": 2,
                        "name": "第八组LN",
                        "nodeList": []
                    },
                    {
                        "id": 107,
                        "level": 2,
                        "name": "第九组LN",
                        "nodeList": []
                    },
                    {
                        "id": 108,
                        "level": 2,
                        "name": "第十组LN",
                        "nodeList": []
                    },
                    {
                        "id": 109,
                        "level": 2,
                        "name": "第十一组LN",
                        "nodeList": []
                    },
                    {
                        "id": 110,
                        "level": 2,
                        "name": "11d LN",
                        "nodeList": []
                    },
                    {
                        "id": 111,
                        "level": 2,
                        "name": "11p LN",
                        "nodeList": []
                    },
                    {
                        "id": 112,
                        "level": 2,
                        "name": "第十二组LN",
                        "nodeList": []
                    },
                    {
                        "id": 113,
                        "level": 2,
                        "name": "12a LN",
                        "nodeList": []
                    },
                    {
                        "id": 114,
                        "level": 2,
                        "name": "12p LN",
                        "nodeList": []
                    },
                    {
                        "id": 115,
                        "level": 2,
                        "name": "14V LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 116,
                "level": 1,
                "name": "全子宫＋双附件",
                "nodeList": [
                    {
                        "id": 117,
                        "level": 2,
                        "name": "宫颈",
                        "nodeList": []
                    },
                    {
                        "id": 118,
                        "level": 2,
                        "name": "内膜及肌壁",
                        "nodeList": []
                    },
                    {
                        "id": 119,
                        "level": 2,
                        "name": "结节",
                        "nodeList": []
                    },
                    {
                        "id": 120,
                        "level": 2,
                        "name": "肌壁间结节",
                        "nodeList": []
                    },
                    {
                        "id": 121,
                        "level": 2,
                        "name": "浆膜下结节",
                        "nodeList": []
                    },
                    {
                        "id": 122,
                        "level": 2,
                        "name": "粘膜下结节",
                        "nodeList": []
                    },
                    {
                        "id": 123,
                        "level": 2,
                        "name": "肌壁",
                        "nodeList": []
                    },
                    {
                        "id": 124,
                        "level": 2,
                        "name": "蓝紫色灶",
                        "nodeList": []
                    },
                    {
                        "id": 125,
                        "level": 2,
                        "name": "左侧宫旁",
                        "nodeList": []
                    },
                    {
                        "id": 126,
                        "level": 2,
                        "name": "右侧宫旁",
                        "nodeList": []
                    },
                    {
                        "id": 127,
                        "level": 2,
                        "name": "取材阴道切线",
                        "nodeList": []
                    },
                    {
                        "id": 128,
                        "level": 2,
                        "name": "送检阴道切线",
                        "nodeList": []
                    },
                    {
                        "id": 129,
                        "level": 2,
                        "name": "息肉状突起",
                        "nodeList": []
                    },
                    {
                        "id": 130,
                        "level": 2,
                        "name": "菜花状突起",
                        "nodeList": []
                    },
                    {
                        "id": 131,
                        "level": 2,
                        "name": "左输卵管",
                        "nodeList": []
                    },
                    {
                        "id": 132,
                        "level": 2,
                        "name": "左卵巢",
                        "nodeList": []
                    },
                    {
                        "id": 133,
                        "level": 2,
                        "name": "右输卵管",
                        "nodeList": []
                    },
                    {
                        "id": 134,
                        "level": 2,
                        "name": "右卵巢",
                        "nodeList": []
                    },
                    {
                        "id": 135,
                        "level": 2,
                        "name": "左髂总LN",
                        "nodeList": []
                    },
                    {
                        "id": 136,
                        "level": 2,
                        "name": "右髂总LN",
                        "nodeList": []
                    },
                    {
                        "id": 137,
                        "level": 2,
                        "name": "左髂内LN",
                        "nodeList": []
                    },
                    {
                        "id": 138,
                        "level": 2,
                        "name": "右髂内LN",
                        "nodeList": []
                    },
                    {
                        "id": 139,
                        "level": 2,
                        "name": "左髂外LN",
                        "nodeList": []
                    },
                    {
                        "id": 140,
                        "level": 2,
                        "name": "右髂外LN",
                        "nodeList": []
                    },
                    {
                        "id": 141,
                        "level": 2,
                        "name": "左闭孔LN",
                        "nodeList": []
                    },
                    {
                        "id": 142,
                        "level": 2,
                        "name": "右闭孔LN",
                        "nodeList": []
                    },
                    {
                        "id": 143,
                        "level": 2,
                        "name": "左腹股沟深LN",
                        "nodeList": []
                    },
                    {
                        "id": 144,
                        "level": 2,
                        "name": "右腹股沟深LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 145,
                "level": 1,
                "name": "脾脏",
                "nodeList": [
                    {
                        "id": 146,
                        "level": 2,
                        "name": "脾组织",
                        "nodeList": []
                    },
                    {
                        "id": 147,
                        "level": 2,
                        "name": "胰腺组织",
                        "nodeList": []
                    },
                    {
                        "id": 148,
                        "level": 2,
                        "name": "脾门LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 149,
                "level": 1,
                "name": "肾标本",
                "nodeList": [
                    {
                        "id": 150,
                        "level": 2,
                        "name": "肿物与肾盂",
                        "nodeList": []
                    },
                    {
                        "id": 151,
                        "level": 2,
                        "name": "肿物与肾被膜",
                        "nodeList": []
                    },
                    {
                        "id": 152,
                        "level": 2,
                        "name": "肿物与肾实质",
                        "nodeList": []
                    },
                    {
                        "id": 153,
                        "level": 2,
                        "name": "肿物与周边脂肪组织",
                        "nodeList": []
                    },
                    {
                        "id": 154,
                        "level": 2,
                        "name": "输尿管断端",
                        "nodeList": []
                    },
                    {
                        "id": 155,
                        "level": 2,
                        "name": "肾盂粘膜",
                        "nodeList": []
                    },
                    {
                        "id": 156,
                        "level": 2,
                        "name": "肾周脂肪",
                        "nodeList": []
                    },
                    {
                        "id": 157,
                        "level": 2,
                        "name": "脉管断端",
                        "nodeList": []
                    },
                    {
                        "id": 158,
                        "level": 2,
                        "name": "肾上腺组织",
                        "nodeList": []
                    },
                    {
                        "id": 159,
                        "level": 2,
                        "name": "肾蒂周围LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 160,
                "level": 1,
                "name": "肝组织",
                "nodeList": [
                    {
                        "id": 161,
                        "level": 2,
                        "name": "肿物",
                        "nodeList": []
                    },
                    {
                        "id": 162,
                        "level": 2,
                        "name": "肿物与周边肝组织",
                        "nodeList": []
                    },
                    {
                        "id": 163,
                        "level": 2,
                        "name": "肝组织及胆囊壁",
                        "nodeList": []
                    },
                    {
                        "id": 164,
                        "level": 2,
                        "name": "胆管扩张处",
                        "nodeList": []
                    },
                    {
                        "id": 165,
                        "level": 2,
                        "name": "胆囊壁",
                        "nodeList": []
                    },
                    {
                        "id": 166,
                        "level": 2,
                        "name": "胆囊颈",
                        "nodeList": []
                    },
                    {
                        "id": 167,
                        "level": 2,
                        "name": "胆囊体",
                        "nodeList": []
                    },
                    {
                        "id": 168,
                        "level": 2,
                        "name": "胆囊底",
                        "nodeList": []
                    },
                    {
                        "id": 169,
                        "level": 2,
                        "name": "金黄色突起",
                        "nodeList": []
                    },
                    {
                        "id": 170,
                        "level": 2,
                        "name": "息肉状突起",
                        "nodeList": []
                    },
                    {
                        "id": 171,
                        "level": 2,
                        "name": "胆囊壁增厚区",
                        "nodeList": []
                    },
                    {
                        "id": 172,
                        "level": 2,
                        "name": "胆囊管断端",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 173,
                "level": 1,
                "name": "食道",
                "nodeList": [
                    {
                        "id": 174,
                        "level": 2,
                        "name": "胃食管交界处",
                        "nodeList": []
                    },
                    {
                        "id": 175,
                        "level": 2,
                        "name": "胃残端",
                        "nodeList": []
                    },
                    {
                        "id": 176,
                        "level": 2,
                        "name": "送检食管周围LN",
                        "nodeList": []
                    },
                    {
                        "id": 177,
                        "level": 2,
                        "name": "取材食管周围LN",
                        "nodeList": []
                    },
                    {
                        "id": 178,
                        "level": 2,
                        "name": "送检隆突下LN",
                        "nodeList": []
                    },
                    {
                        "id": 179,
                        "level": 2,
                        "name": "贲门周围LN",
                        "nodeList": []
                    },
                    {
                        "id": 180,
                        "level": 2,
                        "name": "中段食管旁LN",
                        "nodeList": []
                    },
                    {
                        "id": 181,
                        "level": 2,
                        "name": "颌骨下LN",
                        "nodeList": []
                    },
                    {
                        "id": 182,
                        "level": 2,
                        "name": "胃左动脉旁LN",
                        "nodeList": []
                    },
                    {
                        "id": 183,
                        "level": 2,
                        "name": "肝总动脉旁LN",
                        "nodeList": []
                    },
                    {
                        "id": 184,
                        "level": 2,
                        "name": "肝十二指肠韧带LN",
                        "nodeList": []
                    },
                    {
                        "id": 185,
                        "level": 2,
                        "name": "锁骨上LN",
                        "nodeList": []
                    },
                    {
                        "id": 186,
                        "level": 2,
                        "name": "105LN",
                        "nodeList": []
                    },
                    {
                        "id": 187,
                        "level": 2,
                        "name": "106LN",
                        "nodeList": []
                    },
                    {
                        "id": 188,
                        "level": 2,
                        "name": "107LN",
                        "nodeList": []
                    },
                    {
                        "id": 189,
                        "level": 2,
                        "name": "108LN",
                        "nodeList": []
                    },
                    {
                        "id": 190,
                        "level": 2,
                        "name": "109巴结",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 191,
                "level": 1,
                "name": "胰腺",
                "nodeList": [
                    {
                        "id": 192,
                        "level": 2,
                        "name": "十二指肠乳头处",
                        "nodeList": []
                    },
                    {
                        "id": 193,
                        "level": 2,
                        "name": "肿物与十二指肠",
                        "nodeList": []
                    },
                    {
                        "id": 194,
                        "level": 2,
                        "name": "肿物与胆总管",
                        "nodeList": []
                    },
                    {
                        "id": 195,
                        "level": 2,
                        "name": "肿物与胰腺",
                        "nodeList": []
                    },
                    {
                        "id": 196,
                        "level": 2,
                        "name": "取材部分胃",
                        "nodeList": []
                    },
                    {
                        "id": 197,
                        "level": 2,
                        "name": "取材部分胰腺",
                        "nodeList": []
                    },
                    {
                        "id": 198,
                        "level": 2,
                        "name": "取材十二指肠",
                        "nodeList": []
                    },
                    {
                        "id": 199,
                        "level": 2,
                        "name": "胰腺导管",
                        "nodeList": []
                    },
                    {
                        "id": 200,
                        "level": 2,
                        "name": "十二指肠断端",
                        "nodeList": []
                    },
                    {
                        "id": 201,
                        "level": 2,
                        "name": "胰腺周围LN",
                        "nodeList": []
                    },
                    {
                        "id": 202,
                        "level": 2,
                        "name": "胃小弯LN",
                        "nodeList": []
                    },
                    {
                        "id": 203,
                        "level": 2,
                        "name": "胃大弯LN",
                        "nodeList": []
                    },
                    {
                        "id": 204,
                        "level": 2,
                        "name": "胆囊壁",
                        "nodeList": []
                    },
                    {
                        "id": 205,
                        "level": 2,
                        "name": "胆囊管断端",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 206,
                "level": 1,
                "name": "胰腺及脾",
                "nodeList": [
                    {
                        "id": 207,
                        "level": 2,
                        "name": "胰腺断端",
                        "nodeList": []
                    },
                    {
                        "id": 208,
                        "level": 2,
                        "name": "输尿管断端",
                        "nodeList": []
                    },
                    {
                        "id": 209,
                        "level": 2,
                        "name": "脉管断端",
                        "nodeList": []
                    },
                    {
                        "id": 210,
                        "level": 2,
                        "name": "胰腺肿物与脾门",
                        "nodeList": []
                    },
                    {
                        "id": 211,
                        "level": 2,
                        "name": "胰腺周围LN",
                        "nodeList": []
                    },
                    {
                        "id": 212,
                        "level": 2,
                        "name": "脾门LN",
                        "nodeList": []
                    },
                    {
                        "id": 213,
                        "level": 2,
                        "name": "脾脏组织",
                        "nodeList": []
                    },
                    {
                        "id": 214,
                        "level": 2,
                        "name": "肾组织",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 215,
                "level": 1,
                "name": "穿刺",
                "nodeList": [
                    {
                        "id": 216,
                        "level": 2,
                        "name": "穿刺组织",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 217,
                "level": 1,
                "name": "胰腺、脾、肾上腺",
                "nodeList": [
                    {
                        "id": 218,
                        "level": 2,
                        "name": "肿物与肾上腺",
                        "nodeList": []
                    },
                    {
                        "id": 219,
                        "level": 2,
                        "name": "脾脏",
                        "nodeList": []
                    },
                    {
                        "id": 220,
                        "level": 2,
                        "name": "脾门",
                        "nodeList": []
                    },
                    {
                        "id": 221,
                        "level": 2,
                        "name": "胰腺断端",
                        "nodeList": []
                    },
                    {
                        "id": 222,
                        "level": 2,
                        "name": "脾门LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 223,
                "level": 1,
                "name": "膀胱",
                "nodeList": [
                    {
                        "id": 224,
                        "level": 2,
                        "name": "膀胱周LN",
                        "nodeList": []
                    },
                    {
                        "id": 225,
                        "level": 2,
                        "name": "左精囊",
                        "nodeList": []
                    },
                    {
                        "id": 226,
                        "level": 2,
                        "name": "右精囊",
                        "nodeList": []
                    },
                    {
                        "id": 227,
                        "level": 2,
                        "name": "左输精管断端",
                        "nodeList": []
                    },
                    {
                        "id": 228,
                        "level": 2,
                        "name": "右输精管断端",
                        "nodeList": []
                    },
                    {
                        "id": 229,
                        "level": 2,
                        "name": "左输尿管断端",
                        "nodeList": []
                    },
                    {
                        "id": 230,
                        "level": 2,
                        "name": "右输尿管断端",
                        "nodeList": []
                    },
                    {
                        "id": 231,
                        "level": 2,
                        "name": "左闭孔旁LN",
                        "nodeList": []
                    },
                    {
                        "id": 232,
                        "level": 2,
                        "name": "右闭孔旁LN",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 233,
                "level": 1,
                "name": "胎盘",
                "nodeList": [
                    {
                        "id": 234,
                        "level": 2,
                        "name": "脐带",
                        "nodeList": []
                    },
                    {
                        "id": 235,
                        "level": 2,
                        "name": "羊膜",
                        "nodeList": []
                    },
                    {
                        "id": 236,
                        "level": 2,
                        "name": "胎盘母体面",
                        "nodeList": []
                    },
                    {
                        "id": 237,
                        "level": 2,
                        "name": "胎盘胎儿面",
                        "nodeList": []
                    },
                    {
                        "id": 238,
                        "level": 2,
                        "name": "胎盘与子宫壁",
                        "nodeList": []
                    }
                ]
            },
            {
                "id": 239,
                "level": 1,
                "name": "睾丸+精索",
                "nodeList": [
                    {
                        "id": 240,
                        "level": 2,
                        "name": "肿物",
                        "nodeList": []
                    },
                    {
                        "id": 241,
                        "level": 2,
                        "name": "肿物与周边",
                        "nodeList": []
                    },
                    {
                        "id": 242,
                        "level": 2,
                        "name": "周边睾丸组织",
                        "nodeList": []
                    },
                    {
                        "id": 243,
                        "level": 2,
                        "name": "附睾",
                        "nodeList": []
                    },
                    {
                        "id": 244,
                        "level": 2,
                        "name": "精索断端",
                        "nodeList": []
                    }
                ]
            }
        ]
    },
    "saveLocationList": [
        {
            "isDelete": false,
            "name": "第一层",
            "saveLocationId": 4,
            "sort": 1
        },
        {
            "isDelete": false,
            "name": "第二层",
            "saveLocationId": 5,
            "sort": 2
        },
        {
            "isDelete": false,
            "name": "第三层",
            "saveLocationId": 6,
            "sort": 3
        }
    ],
    "zangqisCheck": [
        {
            "bingzhongs": [
                {
                    "fanbens": [
                        {
                            "sort": 2
                        }
                    ],
                    "sort": 2
                }
            ],
            "isDelete": true,
            "sort": 2,
            "type": 2,
            "zangqiId": 3,
            "zangqiName": "test2"
        }
    ],
    "zangqisPublic": [
        {
            "bingzhongs": [
                {
                    "bingzhongId": 2,
                    "bingzhongName": "test01",
                    "fanbens": [
                        {
                            "fanbenContent": "dasdfasdfa",
                            "fanbenId": 1,
                            "sort": 1
                        },
                        {
                            "fanbenContent": "asdfffffffffdsafadsfas",
                            "fanbenId": 2,
                            "sort": 1
                        }
                    ],
                    "sort": 1
                },
                {
                    "bingzhongId": 3,
                    "bingzhongName": "test01",
                    "fanbens": [
                        {
                            "sort": 1
                        }
                    ],
                    "sort": 1
                }
            ],
            "isDelete": true,
            "sort": 1,
            "type": 1,
            "userId": 1,
            "zangqiId": 2,
            "zangqiName": "test1"
        },
        {
            "bingzhongs": [
                {
                    "fanbens": [
                        {
                            "sort": 3
                        }
                    ],
                    "sort": 3
                }
            ],
            "isDelete": true,
            "sort": 3,
            "type": 1,
            "zangqiId": 4,
            "zangqiName": "test3"
        },
        {
            "bingzhongs": [
                {
                    "fanbens": [
                        {
                            "sort": 4
                        }
                    ],
                    "sort": 4
                }
            ],
            "isDelete": true,
            "sort": 4,
            "type": 1,
            "zangqiId": 5,
            "zangqiName": "test4"
        },
        {
            "bingzhongs": [
                {
                    "fanbens": [
                        {
                            "sort": 5
                        }
                    ],
                    "sort": 5
                }
            ],
            "isDelete": true,
            "sort": 5,
            "type": 1,
            "zangqiId": 8,
            "zangqiName": "test5"
        },
        {
            "bingzhongs": [
                {
                    "fanbens": [
                        {
                            "sort": 6
                        }
                    ],
                    "sort": 6
                }
            ],
            "isDelete": true,
            "sort": 6,
            "type": 1,
            "zangqiId": 9,
            "zangqiName": "test6"
        }
    ],
    "fontSizeList": [
        {
            "id": 1,
            "name": "大"
        },
        {
            "id": 2,
            "name": "中"
        },
        {
            "id": 3,
            "name": "小"
        }
    ],
    "quantityUnitList": [
        {
            "idDelete": false,
            "name": "块",
            "quantityUnitId": 1,
            "sort": 0
        },
        {
            "idDelete": false,
            "name": "堆",
            "quantityUnitId": 2,
            "sort": 1
        },
        {
            "idDelete": false,
            "name": "粒",
            "quantityUnitId": 3,
            "sort": 2
        }
    ],
    "noterList": [
        {
            "isDelete": false,
            "name": "张医生",
            "noterId": 1,
            "sort": 0
        },
        {
            "isDelete": false,
            "name": "李医生",
            "noterId": 2,
            "sort": 1
        },
        {
            "isDelete": false,
            "name": "王医生",
            "noterId": 3,
            "sort": 2
        }
    ]
}

    `);
  }
}


