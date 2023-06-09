package com.ssafy.api.domain.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


/**
 * 방 나가기 API ([POST] /api/sessions) 요청에 필요한 리퀘스트 바디 정의
 */

@Getter
@ApiModel("RoomDisconnectRequest")
public class RoomDisconnectReq {
    @ApiModelProperty(name="유저 email", example = "ssafy@ssafy.com")
    String email;
    @ApiModelProperty(name="방세션", example = "userfaceSession0")
    String sessionId;
}
