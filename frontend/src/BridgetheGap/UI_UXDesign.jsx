import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './uiux.css'
const UI_UXDesign = () => {
  console.log('UI_UX DEDISN');
  
  return (
  <>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"/> */}
        <link href="https://fonts.googleapis.com/css?family=Mulish" rel="stylesheet"/>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" > */}
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NB7JX2NB"></script>

 
    <script defer="defer" src="https://www.rarrtech.com/static/js/main.5b15fab8.js"></script>
    <link href="https://www.rarrtech.com/static/css/main.2a629d9f.css" rel="stylesheet"/>
   
    
   

// {function (n) { if ("/" === n.search[1]) { var a = n.search.slice(1).split("&").map((function (n) { return n.replace(/~and~/g, "&") })).join("?"); window.history.replaceState(null, null, n.pathname.slice(0, -1) + a + n.hash) } }(window.location)}
// {function (e, t, a, n, g) { e[n] = e[n] || [], e[n].push({ "gtm.start": (new Date).getTime(), event: "gtm.js" }); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-NB7JX2NB", m.parentNode.insertBefore(r, m) }(window, document, "script", "dataLayer")}
<section>
    <div class="sc-kEqXyq kNrzWN">
        <h1 class="sc-iqAbeH gtWWoL">Microsoft Solutions<div>
                <ol class="sc-crzpHI hXBPPB">
                    <li class="sc-dItnZ fEIRrw"><a class="sc-bqGGwm ikGElN" href="/">Home </a>≫</li>
                    <li class="sc-dItnZ fEIRrw"><a class="sc-bqGGwm ikGElN" href="/microsoft-solutions/">Solutions </a>≫
                    </li>
                    <li class="sc-dItnZ fEIRrw"><a class="sc-bqGGwm ikGElN" href="/microsoft-solutions/">Microsoft
                            Solutions</a></li>
                </ol>
            </div>
        </h1>
    </div>
    <div class="sc-cKhfQA la-dvMq container mb-3">
        <div class="sc-hgRSKf fNGhKT row">
            <div class="sc-joahKz jEvbTN col-lg-3">
                <div class="fixedSection"><a activeclassname="active-microsoft" aria-current="page"
                        class="sc-ciSlvX fVCIib active" href="/microsoft-solutions/"><button
                            class="sc-jcwnrG fxMUmS btn" active="true"><span>- Microsoft Solutions</span></button></a><a
                        activeclassname="active-coconutERP" class="sc-ciSlvX fVCIib" href="/coconut-erp/"><button
                            class="sc-cBoqew icMuvI btn"><span>Coconut ERP</span></button></a><a
                        activeclassname="active-atsMantra" class="sc-ciSlvX fVCIib" href="/atsmantra/"><button
                            class="sc-cBoqew icMuvI btn"><span>atsMantra</span></button></a><a
                        activeclassname="active-recruitment" class="sc-ciSlvX fVCIib"
                        href="/recruitment-services/"><button class="sc-cBoqew icMuvI btn"><span> Recruitment
                                Services</span></button></a><a activeclassname="active-dbDevelopment"
                        class="sc-ciSlvX fVCIib" href="/database-design-and-development/"><button
                            class="sc-cBoqew icMuvI btn Database"><span> Database Development</span></button></a><a
                        activeclassname="active-appDevelopment" class="sc-ciSlvX fVCIib"
                        href="/application-development/"><button class="sc-cBoqew icMuvI btn Application"><span>
                                Application Development</span></button></a><a activeclassname="active-uimain"
                        class="sc-ciSlvX fVCIib" href="/ui-ux-designing/"><button class="sc-carHnV guOlRf btn"><span>
                                UI/UX Designing</span></button></a>
                    <div class="sc-cxNHoy iAGnnX">
                        <div class="sc-bYwynH dHXkjD">
                            <div class="sc-kLokVA hdtXRa">
                                <p class="sc-lmgPpL iYwqZm">Contact us now</p>
                                <h1 class="sc-giAraZ fGBMxV">Have any questions?</h1>
                                <p class="sc-iJCSyI isCYgf">0129 488 2321</p>
                                <p class="sc-ezyZLq eZYUzM">or go to contact form:</p>
                                <div class="sc-gXfXHJ cmRBFV"><a href="/contact"><button class="sc-hiKewr fYLNwI">Let’s
                                            start now</button><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAnCAYAAACrDdDdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHRSURBVHgB7Zg9LANhGMef6rWlCAOrdmRqwkolIjE2Epvo4mvCYBEJEcRmwIYuTWwS0U1iKUYknXRUs6QdtPpFvf/39JTJcM8lb/P+prt7m/R++T/P896dy5jJ1qhJaaEmRsupipZTFS2nKlpOVbScqmg5u+n2u2i036BAD+/fG+QgkDqd91NkyGNdi9+WafXsnXIF+19OHJXbn26TYjsXRUqmqxQZ9NDShI+6hPTUQZ7sxlG5xENFJgUxkHyqUlYktjnZKlO1Oz1H5DbEzYcCbikAOUr/rN18i4b63Ja0XbB2NGTudztlMkExPHAeEz13vtJu/QalCZ5fP8lu2JKDyPV6h0xk9rhA8buyvB4d9lLq5cM6Rs8hzYxKchgejWI4RmnKsiRTLLbgl6KYlhywyGH/io546fCqZCWGvsOkXBZJAchCbHzvjWUbACxywV6zlTEd62DUI61o2Eu5fE2ubYstgRMWuVTG7KnwgPFrAqKvjkSalw3SnLhbQmtbZDPFill2i2M+OVhK4hxlih7DWuLRGTkX10dZSGGoQKoOEps7KbD12F9c3F+cMVzQgyhVp6TqsD+hoM849rD/oN/nVEXLqYqWUxUtpypaTlWaWu4LmIamvAsWMooAAAAASUVORK5CYII="
                                            class="sc-jJMFUa gjsLcP"/></a></div>
                            </div><img src="/static/media/Rectangle 23840.3a0d4547898a89dc42b7.png"
                                class="sc-iklJxR yPSkl"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-dVSWFS fGYFHR col-lg-9">
                <h1 class="sc-ksltBz kCIbhK">Microsoft Solutions</h1>
                <div class="sc-czEVgl gliPHl radio-tabs">
                    <div class="col-lg-10"><input hidden="" class="sc-bOChxB flUKSc state" type="radio" title="Input1"
                            name="input-state" id="radio1" value="Azure" checked="" /><input
                            class="sc-bOChxB flUKSc state" hidden="" type="radio" title="Input2" name="input-state"
                            id="radio2" value="Dynamic"/>
                            <input class="sc-bOChxB flUKSc state" hidden="" type="radio"
                            title="Input3" name="input-state" id="radio3" value="Microsoft"/>
                        <div class="sc-jHUuhO eOqzul tabs"><label for="radio1" id="first-tab"
                                class="sc-zGZJm giEhIw tab"><span class="sc-hRUGsP eMYbnB"><img
                                        src="/static/media/azure11.d3fa7c461da7f79bd4f0.jpg" alt="Server"
                                        class="sc-czNvoi jOFwVt" />
                                    <h3 class="sc-dYCqZD ENsdE tab-label">Microsoft Azure Cloud Platform</h3>
                                </span></label><label for="radio2" id="second-tab" class="sc-zGZJm giEhIw tab"><span
                                    class="sc-hRUGsP eMYbnB"><img
                                        src="data:image/jpeg;base64,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"
                                        alt="Microsoft365" class="sc-czNvoi jOFwVt" />
                                    <h3 class="sc-dYCqZD ENsdE tab-label">Microsoft Dynamics 365 </h3>
                                </span></label><label for="radio3" id="third-tab" class="sc-zGZJm giEhIw tab"><span
                                    class="sc-hRUGsP eMYbnB"><img src="/static/media/dynamic1.03153cb4570364260a5f.png"
                                        alt="Microsoft" class="sc-czNvoi jOFwVt" />
                                    <h3 class="sc-dYCqZD ENsdE tab-label">Microsoft 365</h3>
                                </span></label></div>
                    </div>
                    <div class="col-lg-12">
                        <div class="sc-bRubZj fLECrL panels">
                            <div id="first-panel" class="sc-jFczGg hFwjgZ  panel active animated slideInRight">
                                <p class="sc-iKUUlb ilRxfw" style="margin-top: 13px;">Microsoft Azure is a comprehensive
                                    cloud computing platform provided by Microsoft. It offers a vast array of cloud
                                    services designed to assist organizations in building, deploying, and managing
                                    applications and services through Microsoft-managed data centers.</p>
                                <p class="sc-iKUUlb ilRxfw">With Azure, businesses can leverage a scalable and flexible
                                    infrastructure that spans across a global network of Microsoft-managed data centers.
                                    These data centers are strategically located around the world, ensuring reliable
                                    performance, data redundancy, and compliance with local regulations.</p>
                                <p class="sc-iKUUlb ilRxfw">Azure provides a wide range of services, including
                                    infrastructure as a service (IaaS), platform as a service (PaaS), and software as a
                                    service (SaaS). It supports various programming languages, frameworks, and tools,
                                    enabling developers to build applications using their preferred technologies.</p>
                                <table class="sc-hHSkns zbXQa table table-striped table-bordered ">
                                    <tbody class="sc-ezHfaH jihVLc">
                                        <tr class="sc-kkmFQC bLHCUF">
                                            <td class="sc-cTsLKY jbAlpP"> <img
                                                    src="/static/media/icon-Virtual-Machines.528033083b7d76eb005a13c84db80b15.svg"
                                                    alt="Virtual-Machines" class="sc-fvNhoi eUxsiq" /> Azure Virtual
                                                Machines—Windows</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/vm-linux.58870c17d863a879e18b91b0d547167d.svg"
                                                    alt="vm-linux" class="sc-fvNhoi eUxsiq" />Azure Virtual Machines—Linux
                                            </td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/azure-sql-database.54be687c79d025bc33cd4bfbc71b5ea6.svg"
                                                    alt="sql-database" class="sc-fvNhoi eUxsiq" />Azure SQL Database</td>
                                        </tr>
                                        <tr class="sc-kkmFQC bLHCUF">
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/storage-blobs1.6fda493644df438216ff9c4d6d06f8d0.svg"
                                                    alt="Cosmos" class="sc-fvNhoi eUxsiq" />Azure Cosmos DB</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/mysql.82d2a1940a14c6e8711c8f403d8c967e.svg"
                                                    alt="mysql" class="sc-fvNhoi eUxsiq" />Azure Database for MySQL</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/postgresql.30930e81724ee7714fb222e040b9dc47.svg"
                                                    alt="postgresql" class="sc-fvNhoi eUxsiq" />Azure Database for
                                                PostgreSQL</td>
                                        </tr>
                                        <tr class="sc-kkmFQC bLHCUF">
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/azure-devops.8060aba1da38c59f4b1c0bfe9a8aa69a.svg"
                                                    alt="devops" class="sc-fvNhoi eUxsiq" />Azure DevOps</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/storage-blobs.6fda493644df438216ff9c4d6d06f8d0.svg"
                                                    alt="Blob" class="sc-fvNhoi eUxsiq"/>Blob Storage</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/search.59b1e7e1fd52310a778dae018ea9b5d7.svg"
                                                    alt="Search" class="sc-fvNhoi eUxsiq" />Cognitive Search</td>
                                        </tr>
                                        <tr class="sc-kkmFQC bLHCUF">
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/data-factory.e72f0b080bd4881d8fa1dc322ab390af.svg"
                                                    alt="Factory" class="sc-fvNhoi eUxsiq"/>Data Factory</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/form-recognizer.851c4560b42d6bb44bfdaf3a5bcf7906.svg"
                                                    alt="Recognizer" class="sc-fvNhoi eUxsiq"/>Form Recognizer</td>
                                            <td class="sc-cTsLKY jbAlpP"><img
                                                    src="/static/media/virtual-network.83cd2710d99a2464419cc520cae227b5.svg"
                                                    alt="Network" class="sc-fvNhoi eUxsiq"/>Virtual Network </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="sc-iKUUlb ilRxfw mt-4">The cloud offers a multitude of services, and Microsoft
                                    Azure provides an extensive range of options to help you host and launch your
                                    website, web application, or mobile application quickly and efficiently. With
                                    Azure's comprehensive suite of services, you can leverage a wide array of tools and
                                    solutions to build your product and establish your online presence seamlessly and
                                    swiftly.</p>
                            </div>
                            <div id="second-panel" class="sc-jFczGg hFwjgZ d-none panel active animated slideInRight">
                                <p class="sc-dPxxu CBnsV mt-4">Microsoft Dynamics 365 is a powerful suite of business
                                    applications that combines CRM (Customer Relationship Management) and ERP
                                    (Enterprise Resource Planning) functionalities into a single, unified platform.
                                    Designed to help organizations of all sizes and industries, Dynamics 365 provides a
                                    range of intelligent tools and solutions to streamline business processes, drive
                                    customer engagement, and enable data-driven decision-making.</p>
                                <p class="sc-dPxxu CBnsV">With Dynamics 365, businesses can effectively manage their
                                    sales, customer service, marketing, and field service operations. The CRM modules
                                    empower organizations to build strong customer relationships, track leads, manage
                                    opportunities, and deliver exceptional customer experiences. Through integrated
                                    marketing automation capabilities, businesses can create targeted campaigns, nurture
                                    leads, and measure marketing performance.</p>
                                <p class="sc-dPxxu CBnsV">On the ERP side, Dynamics 365 offers comprehensive solutions
                                    for financial management, supply chain management, manufacturing, human resources,
                                    and more. These modules enable organizations to optimize their financial operations,
                                    streamline supply chain processes, improve manufacturing efficiency, and effectively
                                    manage their workforce.</p>
                                <p class="sc-dPxxu CBnsV">Dynamics 365 leverages the power of Microsoft Azure and
                                    integrates seamlessly with other Microsoft products and services, providing a
                                    unified and intelligent ecosystem. It harnesses the capabilities of artificial
                                    intelligence (AI), machine learning (ML), and advanced analytics to unlock valuable
                                    insights from data, automate processes, and deliver personalized experiences.</p>
                                <p class="sc-dPxxu CBnsV">The cloud-based nature of Dynamics 365 offers flexibility,
                                    scalability, and security. Businesses can access their applications and data from
                                    anywhere, on any device, and easily scale their resources as their needs evolve.
                                    Built-in security measures and compliance certifications ensure the protection of
                                    sensitive information and adherence to industry regulations.</p>
                                <p class="sc-dPxxu CBnsV">Overall, Microsoft Dynamics 365 is a comprehensive business
                                    solution that empowers organizations to transform their operations, enhance customer
                                    engagement, and achieve their business goals with agility and intelligence.</p>
                                <h4 class="sc-dMabOo fZdkir">List of Products (Function Wise)</h4>
                                <div class="vertical-tabs-container">
                                    <div class="vertical-tabs"><button class="active">Sales and
                                            marketing</button><button class="">Service</button><button class="">Finance
                                            &amp; Operations</button><button class="">Supply Chain</button></div>
                                    <div class="tab-content1">
                                        <h4 class="sc-ihRJrB eLbxzl"><img
                                                src="/static/media/sales.33fddcdc5e70f84b474f8a4fc002a665.svg"
                                                alt="sales" class="sc-jdXLFc gipTxJ" style="margin-right: 5px;"/>
                                            Dynamics 365 Sales</h4>
                                        <h4 class="sc-ihRJrB eLbxzl"> <img
                                                src="/static/media/marketing.f8f367c00e0c1a9fb41e8dd808e74dbe.svg"
                                                alt="marketing" class="sc-jdXLFc gipTxJ"/>Dynamics 365 Marketing</h4>
                                        <h4 class="sc-ihRJrB eLbxzl"> <img
                                                src="/static/media/customer-insights.8a59c8a2ffed327dc38470485139f408.svg"
                                                alt="insights" class="sc-jdXLFc gipTxJ"/>Dynamics 365 Customer Insights
                                        </h4>
                                    </div>
                                </div>
                                <p class="sc-dPxxu CBnsV mt-4">This is not all, the cloud-based nature of Dynamics 365
                                    and seamless integration with other Microsoft products, D35 offers flexibility,
                                    scalability, and security. Businesses can access their applications and data from
                                    anywhere, on any device, and easily scale their resources as their needs evolve.
                                    Built-in security measures and compliance certifications ensure the protection of
                                    sensitive information and adherence to industry regulations.</p>
                                <p class="sc-dPxxu CBnsV">Overall, Microsoft Dynamics 365 is a comprehensive business
                                    solution that empowers organizations to transform their operations, enhance customer
                                    engagement, and achieve their business goals with agility and intelligence.</p>
                            </div>
                            <div id="third-panel" class="sc-jFczGg hFwjgZ d-none panel active animated slideInRight">
                                <div class="microsoftThree-tabs">
                                    <div class="Microsoftthreevertical-tabs"><button class="active">For
                                            You</button><button class=""
                                            title="For small and medium businesses (maximum 300 users). For enterprise products/solutions, contact separately.">For
                                            Your Business <sup>#</sup></button></div>
                                    <div class="tab-content">
                                        <div>
                                            <section>
                                                <table class="sc-ljpcuV cnupNp table table-bordered ">
                                                    <thead class="sc-gGqFlS fUa-dkW">
                                                        <tr class="sc-juNLwZ jLtojk">
                                                            <th class="sc-gDyKKk iYikbx">Microsoft 365 Personal</th>
                                                            <th class="sc-gDyKKk iYikbx">Microsoft 365 Family</th>
                                                            <th class="sc-gDyKKk iYikbx">Office Home &amp; Student 2021
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="sc-fVnRDi bFOkDz">
                                                        <tr class="sc-juNLwZ jLtojk">
                                                            <td class="sc-iMCSpX cxTfef">
                                                                <ul class="sc-jxFFYH gsWke">
                                                                    <li>For PC, Mac, iPhone, iPad and Android phones and
                                                                        tablets</li>
                                                                    <li>1 TB of cloud storage</li>
                                                                    <li>For one person</li>
                                                                </ul>
                                                            </td>
                                                            <td class="sc-iMCSpX cxTfef">
                                                                <ul class="sc-jxFFYH gsWke">
                                                                    <li>For PC, Mac, iPhone, iPad and Android phones and
                                                                        tablets</li>
                                                                    <li>Up to 6 TB of cloud storage (1 TB per person)
                                                                    </li>
                                                                    <li>For one to six people</li>
                                                                </ul>
                                                            </td>
                                                            <td class="sc-iMCSpX cxTfef">
                                                                <ul class="sc-jxFFYH gsWke">
                                                                    <li>For one PC or Mac</li>
                                                                    <li>For one person</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr class="sc-juNLwZ jLtojk">
                                                            <td class="sc-iMCSpX cxTfef">
                                                                <ul class="sc-jxFFYH gsWke">
                                                                    <li>For one person </li>
                                                                    <li>Use on up to 5 devices simultaneously </li>
                                                                    <li>Works on PC, Mac, iPhone, iPad, and Android
                                                                        phones and tablets </li>
                                                                    <li>1 TB (1000 GB) of cloud storage </li>
                                                                    <li>Word, Excel, PowerPoint, and OneNote with
                                                                        offline access and premium features </li>
                                                                    <li>Microsoft Defender* advanced security for your
                                                                        personal data and devices </li>
                                                                    <li>OneDrive ransomware protection for your files
                                                                        and photos </li>
                                                                    <li>Outlook ad-free secure email </li>
                                                                    <li>Microsoft Editor advanced spelling, grammar, and
                                                                        writing assistance </li>
                                                                    <li>Clipchamp* video editor with premium filters and
                                                                        effects </li>
                                                                    <li>Premium, customizable templates </li>
                                                                    <li>Expanded content library of high-quality photos,
                                                                        icons, fonts, videos, and audio </li>
                                                                    <li>Contact support via chat or email to get help
                                                                        when you need it</li>
                                                                </ul>
                                                            </td>
                                                            <td class="sc-iMCSpX cxTfef">
                                                                <ul class="sc-jxFFYH gsWke">
                                                                    <li>For one to six people to share </li>
                                                                    <li>Each person can use on up to 5 devices
                                                                        simultaneously </li>
                                                                    <li>Works on Windows, Mac, iPhone, iPad, and Android
                                                                        phones and tablets </li>
                                                                    <li>Up to 6 TB of cloud storage (1 TB per person)
                                                                    </li>
                                                                    <li>Word, Excel, PowerPoint, and OneNote with
                                                                        offline access and premium features </li>
                                                                    <li>Microsoft Defender* advanced security for your
                                                                        personal data and devices</li>
                                                                    <li>OneDrive ransomware protection for your files
                                                                        and photos </li>
                                                                    <li>Outlook ad-free secure email </li>
                                                                    <li>Microsoft Editor advanced spelling, grammar, and
                                                                        writing assistance </li>
                                                                    <li>Clipchamp* video editor with premium filters
                                                                        &amp; effects </li>
                                                                    <li>Additional features in the Microsoft Family
                                                                        Safety mobile app </li>
                                                                    <li>Premium, customizable templates </li>
                                                                    <li>Expanded content library of high-quality photos,
                                                                        icons, fonts, videos, and audio </li>
                                                                    <li>Contact support via chat or email to get help
                                                                        when you need it</li>
                                                                </ul>
                                                            </td>
                                                            <td class="sc-iMCSpX cxTfef">
                                                                <ul class="sc-jxFFYH gsWke">
                                                                    <li>One-time purchase for 1 PC or Mac </li>
                                                                    <li>Classic 2021 versions of Word, Excel, and
                                                                        PowerPoint </li>
                                                                    <li>Microsoft support included for first 60 days at
                                                                        no extra cost </li>
                                                                    <li>Compatible with Windows 11, Windows 10, or
                                                                        macOS*</li>
                                                                    <li>For non-commercial use </li>
                                                                    <li>Works with Microsoft Teams</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  
  </>
  )
}

export default UI_UXDesign