package com.ssafy.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicate;
import com.google.common.base.Predicates;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger.web.UiConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

@Configuration // 스프링 실행시 설정파일
@EnableSwagger2 // Swagger2를 사용
@SuppressWarnings("unchecked") // warning 제거
public class SwaggerConfiguration {

//	Swagger-UI 2.x 확인
//	http://localhost[:8080]/{your-app-root}/swagger-ui.html

    private String version = "V1";
    private String title = "병아리 Backend API " + version;

    private ApiInfo apiInfo() {
        String descript = "병아리 React API Reference for Developers<br>";
        descript += "<img style=\"width: 150px\" src=\"/assets/img/chick.jpg\">";
        return new ApiInfoBuilder().title(title).description(descript)
                .contact(new Contact("병아리", "http://i8b207.p.ssafy.io/", "kimchick207@gmail.com")).license("chick License")
                .licenseUrl("http://i8b207.p.ssafy.io/").version("1.0").build();
    }

    public Docket getDocket(String groupName, Predicate<String> predicate) {
        return new Docket(DocumentationType.SWAGGER_2).groupName(groupName).apiInfo(apiInfo()).select()
                .apis(RequestHandlerSelectors.basePackage("com.ssafy.api.controller")).paths(predicate)//Contoller path
                .apis(RequestHandlerSelectors.any()).build()
                .securityContexts(newArrayList(securityContext()))//security Context
                .securitySchemes(newArrayList(apiKey()));
    }
    private ApiKey apiKey() {
        return new ApiKey(SECURITY_SCHEMA_NAME, "Authorization", "header");
    }
    private SecurityContext securityContext() {
        return springfox
                .documentation
                .spi.service
                .contexts
                .SecurityContext
                .builder()
                .securityReferences(defaultAuth()).forPaths(PathSelectors.any()).build();
    }
    public static final String SECURITY_SCHEMA_NAME = "JWT";
    public static final String AUTHORIZATION_SCOPE_GLOBAL = "global";
    public static final String AUTHORIZATION_SCOPE_GLOBAL_DESC = "accessEverything";

    List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope(AUTHORIZATION_SCOPE_GLOBAL, AUTHORIZATION_SCOPE_GLOBAL_DESC);
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return newArrayList(new SecurityReference(SECURITY_SCHEMA_NAME, authorizationScopes));
    }
    // swagger ui 설정.
    @Bean
    public Docket allApi() {
        return getDocket("전체", Predicates.or(PathSelectors.regex("/*.*")));
    }
    @Bean
    public UiConfiguration uiConfig() {
        return UiConfigurationBuilder.builder().displayRequestDuration(true).validatorUrl("/*.*").build();
    }

}
