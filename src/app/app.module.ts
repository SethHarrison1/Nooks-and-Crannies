import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbapComponent } from './abap/abap.component';
import { HomeComponent } from './home/home.component';
import { AdaComponent } from './ada/ada.component';
import { CcComponent } from './cc/cc.component';
import { CsharpComponent } from './csharp/csharp.component';
import { CobolComponent } from './cobol/cobol.component';
import { DartComponent } from './dart/dart.component';
import { DelphiComponent } from './delphi/delphi.component';
import { GoComponent } from './go/go.component';
import { GroovyComponent } from './groovy/groovy.component';
import { HaskellComponent } from './haskell/haskell.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JuliaComponent } from './julia/julia.component';
import { KotlinComponent } from './kotlin/kotlin.component';
import { LuaComponent } from './lua/lua.component';
import { MatlabComponent } from './matlab/matlab.component';
import { ObjectivecComponent } from './objectivec/objectivec.component';
import { PerlComponent } from './perl/perl.component';
import { PhpComponent } from './php/php.component';
import { PythonComponent } from './python/python.component';
import { RComponent } from './r/r.component';
import { RubyComponent } from './ruby/ruby.component';
import { RustComponent } from './rust/rust.component';
import { ScalaComponent } from './scala/scala.component';
import { SwiftComponent } from './swift/swift.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { VbaComponent } from './vba/vba.component';
import { VisualbasicComponent } from './visualbasic/visualbasic.component';

@NgModule({
  declarations: [
    AppComponent,
    AbapComponent,
    HomeComponent,
    AdaComponent,
    CcComponent,
    CsharpComponent,
    CobolComponent,
    DartComponent,
    DelphiComponent,
    GoComponent,
    GroovyComponent,
    HaskellComponent,
    JavaComponent,
    JavascriptComponent,
    JuliaComponent,
    KotlinComponent,
    LuaComponent,
    MatlabComponent,
    ObjectivecComponent,
    PerlComponent,
    PhpComponent,
    PythonComponent,
    RComponent,
    RubyComponent,
    RustComponent,
    ScalaComponent,
    SwiftComponent,
    TypescriptComponent,
    VbaComponent,
    VisualbasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
