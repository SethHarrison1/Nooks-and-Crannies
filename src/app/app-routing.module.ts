import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
{ path: 'abap', component: AbapComponent },
  { path: 'ada', component: AdaComponent },
  { path: 'cc++', component: CcComponent },
  { path: 'cobol', component: CobolComponent },
  { path: 'csharp', component: CsharpComponent },
  { path: 'dart', component: DartComponent },
  { path: 'delphi', component: DelphiComponent },
  { path: 'go', component: GoComponent },
  { path: 'groovy', component: GroovyComponent },
  { path: 'haskell', component: HaskellComponent },
  { path: '', component: HomeComponent },
  { path: 'java', component: JavaComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'julia', component: JuliaComponent  },
  { path: 'kotlin', component: KotlinComponent },
  { path: 'lua', component: LuaComponent },
  { path: 'matlab', component: MatlabComponent },
  { path: 'objectivec', component: ObjectivecComponent },
  { path: 'perl', component: PerlComponent },
  { path: 'php', component: PhpComponent },
  { path: 'python', component: PythonComponent },
  { path: 'r', component: RComponent },
  { path: 'ruby', component: RubyComponent },
  { path: 'rust', component: RustComponent },
  { path: 'scala', component: ScalaComponent },
  { path: 'swift', component: SwiftComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'vba', component: VbaComponent },
  { path: 'visualbasic', component: VisualbasicComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
